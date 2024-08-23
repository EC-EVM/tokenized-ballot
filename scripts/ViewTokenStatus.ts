// npx ts-node --files ./scripts/ViewTokenStatus.ts CONTRACT_ADDRESS ACCOUNT_ADDRESS

import { createPublicClient, http } from "viem";

import { sepolia } from "viem/chains";
import { abi } from "../artifacts/contracts/MyToken.sol/MyToken.json";
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
  const balance = (await publicClient.readContract({
    address: contractAddress,
    abi,
    functionName: "balanceOf",
    args: [accountAddress],
  })) as BigInt;

  const votes = (await publicClient.readContract({
    address: contractAddress,
    abi,
    functionName: "getVotes",
    args: [accountAddress],
  })) as BigInt;

  const delegate = (await publicClient.readContract({
    address: contractAddress,
    abi,
    functionName: "delegates",
    args: [accountAddress],
  })) as String;

  const blockNumber = await publicClient.getBlockNumber();

  console.log(
    `Account: ${accountAddress}\n`,
    `Tokens: ${balance.toString()}\n`,
    `Votes: ${votes.toString()}\n`,
    `Delegate: ${delegate}\n`,
    `Block: ${blockNumber}`
  );

  process.exit();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});