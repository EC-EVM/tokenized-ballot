// npx ts-node --files ./scripts/ViewVotingStatus.ts CONTRACT_ADDRESS ACCOUNT_ADDRESS

import { createPublicClient, http } from "viem";

import { sepolia } from "viem/chains";
import { abi } from "../artifacts/contracts/TokenizedBallot.sol/TokenizedBallot.json";
import { abi as tokenAbi } from "../artifacts/contracts/MyToken.sol/MyToken.json";
import * as dotenv from "dotenv";
dotenv.config();

const providerApiKey = process.env.ALCHEMY_API_KEY || "";

function validateParameters(parameters: string[]) {
  if (!parameters || parameters.length < 2)
    throw new Error("Parameters not provided");

  const contractAddress = parameters[0] as `0x${string}`;
  if (!contractAddress) throw new Error("Contract address not provided");
  if (!/^0x[a-fA-F0-9]{40}$/.test(contractAddress))
    throw new Error("Invalid contract address");

  const accountAddress = parameters[1] as `0x${string}`;
  if (!accountAddress) throw new Error("Account address not provided");
  if (!/^0x[a-fA-F0-9]{40}$/.test(accountAddress))
    throw new Error("Invalid account address");

  return { contractAddress, accountAddress }
}

async function main() {
  console.log("\n");
  const { contractAddress, accountAddress } = validateParameters(process.argv.slice(2));

  const publicClient = createPublicClient({
    chain: sepolia,
    transport: http(`https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`),
  });

  const tokenAddress = (await publicClient.readContract({
    address: contractAddress,
    abi,
    functionName: "tokenContract",
  })) as `0x${string}`;

  const targetBlockNumber = (await publicClient.readContract({
    address: contractAddress,
    abi,
    functionName: "targetBlockNumber",
  })) as BigInt;

  const fullVotePower = (await publicClient.readContract({
    address: tokenAddress,
    abi: tokenAbi,
    functionName: "getPastVotes",
    args: [accountAddress, targetBlockNumber],
  })) as BigInt;

  const spentVotePower = (await publicClient.readContract({
    address: contractAddress,
    abi,
    functionName: "spentVotePower",
    args: [accountAddress],
  })) as BigInt;

  const remainingVotePower = (await publicClient.readContract({
    address: contractAddress,
    abi,
    functionName: "getVotePower",
    args: [accountAddress],
  })) as BigInt;

  const blockNumber = await publicClient.getBlockNumber();

  console.log(
    `Account: ${accountAddress}\n`,
    `Full Vote Power: ${fullVotePower.toString()}\n`,
    `Spent Votes: ${spentVotePower.toString()}\n`,
    `Remaining Vote Power: ${remainingVotePower.toString()}\n`,
    `Block: ${blockNumber}`
  );

  process.exit();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});