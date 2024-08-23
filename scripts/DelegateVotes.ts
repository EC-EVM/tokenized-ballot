// npx ts-node --files ./scripts/DelegateVotes.ts CONTRACT_ADDRESS DELEGATE_ADDRESS

import { createPublicClient, http, createWalletClient } from "viem";

import { privateKeyToAccount } from "viem/accounts";
import { sepolia } from "viem/chains";
import { abi } from "../artifacts/contracts/MyToken.sol/MyToken.json";
import * as dotenv from "dotenv";
dotenv.config();

const providerApiKey = process.env.ALCHEMY_API_KEY || "";
const delegatorPrivateKey = process.env.PRIVATE_KEY || "";

function validateParameters(parameters: string[]) {
  if (!parameters || parameters.length < 2)
    throw new Error("Parameters not provided");

  const contractAddress = parameters[0] as `0x${string}`;
  if (!contractAddress) throw new Error("Contract address not provided");
  if (!/^0x[a-fA-F0-9]{40}$/.test(contractAddress))
    throw new Error("Invalid contract address");

  const delegateAddress = parameters[1] as `0x${string}`;
  if (!delegateAddress) throw new Error("Delegate address not provided");
  if (!/^0x[a-fA-F0-9]{40}$/.test(delegateAddress))
    throw new Error("Invalid delegate address");

  return { contractAddress, delegateAddress }
}

async function main() {
  console.log("\n");
  const { contractAddress, delegateAddress } = validateParameters(process.argv.slice(2));

  const account = privateKeyToAccount(`0x${delegatorPrivateKey}`);
  const sender = createWalletClient({
    account,
    chain: sepolia,
    transport: http(`https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`),
  });

  console.log(`Delegating from ${account.address} tokens to account: ${delegateAddress}`);
  console.log("Confirm? (Y/n)");

  const stdin = process.stdin;
  stdin.on("data", async function (d) {
    if (d.toString().trim() == "Y") {
      const hash = await sender.writeContract({
        address: contractAddress,
        abi,
        functionName: "delegate",
        args: [delegateAddress],
      });
      console.log("Transaction hash:", hash);
      console.log("Waiting for confirmations...");
      const publicClient = createPublicClient({
        chain: sepolia,
        transport: http(`https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`),
      });
      const receipt = await publicClient.waitForTransactionReceipt({ hash });
      console.log(`Transaction confirmed: ${receipt.status}`);
      console.log(`Block: ${receipt.blockNumber}`)
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