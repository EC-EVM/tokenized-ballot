// npx ts-node --files ./scripts/GrantMinterRole.ts TOKEN_ADDRESS MINTER_ADDRESS

import { createPublicClient, http, createWalletClient, keccak256, toHex } from "viem";

import { privateKeyToAccount } from "viem/accounts";
import { sepolia } from "viem/chains";
import { abi } from "../artifacts/contracts/MyToken.sol/MyToken.json";
import * as dotenv from "dotenv";
dotenv.config();

const providerApiKey = process.env.ALCHEMY_API_KEY || "";
const delegatorPrivateKey = process.env.PRIVATE_KEY || "";

const MINTER_ROLE = keccak256(toHex("MINTER_ROLE"));;

function validateParameters(parameters: string[]) {
  if (!parameters || parameters.length < 2)
    throw new Error("Parameters not provided");

  const tokenAddress = parameters[0] as `0x${string}`;
  if (!tokenAddress) throw new Error("Token address not provided");
  if (!/^0x[a-fA-F0-9]{40}$/.test(tokenAddress))
    throw new Error("Invalid token address");

  const minterAddress = parameters[1] as `0x${string}`;
  if (!minterAddress) throw new Error("Minter address not provided");
  if (!/^0x[a-fA-F0-9]{40}$/.test(minterAddress))
    throw new Error("Invalid minter address");

  return { tokenAddress, minterAddress }
}

async function main() {
  console.log("\n");
  const { tokenAddress, minterAddress } = validateParameters(process.argv.slice(2));

  const account = privateKeyToAccount(`0x${delegatorPrivateKey}`);
  const sender = createWalletClient({
    account,
    chain: sepolia,
    transport: http(`https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`),
  });

  console.log(`Granting minter role to ${minterAddress}`);
  console.log("Confirm? (Y/n)");

  const stdin = process.stdin;
  stdin.on("data", async function (d) {
    if (d.toString().trim() == "Y") {
      const hash = await sender.writeContract({
        address: tokenAddress,
        abi,
        functionName: "grantRole",
        args: [MINTER_ROLE, minterAddress],
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