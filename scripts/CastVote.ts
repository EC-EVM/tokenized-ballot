// npx ts-node --files ./scripts/CastVote.ts CONTRACT_ADDRESS PROPOSAL_INDEX AMOUNT

import { createPublicClient, http, createWalletClient, hexToString } from "viem";

import { privateKeyToAccount } from "viem/accounts";
import { sepolia } from "viem/chains";
import { abi } from "../artifacts/contracts/TokenizedBallot.sol/TokenizedBallot.json";
import * as dotenv from "dotenv";
dotenv.config();

const providerApiKey = process.env.ALCHEMY_API_KEY || "";
const voterPrivateKey = process.env.PRIVATE_KEY || "";

function validateParameters(parameters: string[]) {
  if (!parameters || parameters.length < 3)
    throw new Error("Parameters not provided");

  const contractAddress = parameters[0] as `0x${string}`;
  if (!contractAddress) throw new Error("Contract address not provided");
  if (!/^0x[a-fA-F0-9]{40}$/.test(contractAddress))
    throw new Error("Invalid contract address");

  const proposalIndex = parameters[1];
  if (isNaN(Number(proposalIndex))) throw new Error("Invalid proposal index");

  const amount = parameters[2];
  if (isNaN(Number(amount))) throw new Error("Invalid amount");

  return { contractAddress, proposalIndex, amount };
}

async function main() {
  console.log("\n");
  const { contractAddress, proposalIndex, amount } = validateParameters(process.argv.slice(2));

  const publicClient = createPublicClient({
    chain: sepolia,
    transport: http(`https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`),
  });

  const proposal = (await publicClient.readContract({
    address: contractAddress,
    abi,
    functionName: "proposals",
    args: [BigInt(proposalIndex)],
  })) as any[];
  const proposalName = hexToString(proposal[0], { size: 32 });

  const account = privateKeyToAccount(`0x${voterPrivateKey}`);
  const sender = createWalletClient({
    account,
    chain: sepolia,
    transport: http(`https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`),
  });

  console.log(`Voting for proposal '${proposalName}' with ${amount} votes`);
  console.log("Confirm? (Y/n)");

  const stdin = process.stdin;
  stdin.on("data", async function (d) {
    if (d.toString().trim() == "Y") {
      const hash = await sender.writeContract({
        address: contractAddress,
        abi,
        functionName: "vote",
        args: [proposalIndex, amount],
      });
      console.log("Transaction hash:", hash);
      console.log("Waiting for confirmations...");
      const publicClient = createPublicClient({
        chain: sepolia,
        transport: http(`https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`),
      });
      const receipt = await publicClient.waitForTransactionReceipt({ hash });
      console.log(`Transaction confirmed: ${receipt.status}`);
    } else {
      console.log("Operation cancelled");
    }
    process.exit();
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});