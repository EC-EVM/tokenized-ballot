// npx ts-node --files ./scripts/DeployTokenizedBallot.ts TOKEN_CONTRACT TARGET_BLOCK_NUMBER PROPOSAL_NAMES

import { createPublicClient, http, createWalletClient, formatEther, toHex } from "viem";

import { privateKeyToAccount } from "viem/accounts";
import { sepolia } from "viem/chains";
import { abi, bytecode } from "../artifacts/contracts/TokenizedBallot.sol/TokenizedBallot.json";
import * as dotenv from "dotenv";
dotenv.config();

const providerApiKey = process.env.ALCHEMY_API_KEY || "";
const deployerPrivateKey = process.env.PRIVATE_KEY || "";

function validateParameters(parameters: string[]) {
  if (!parameters || parameters.length < 3)
    throw new Error("Parameters not provided");

  const tokenAddress = parameters[0] as `0x${string}`;
  if (!tokenAddress) throw new Error("Token address not provided");
  if (!/^0x[a-fA-F0-9]{40}$/.test(tokenAddress))
    throw new Error("Invalid token address");

  const targetBlockNumber = parameters[1];
  if (isNaN(Number(targetBlockNumber))) throw new Error("Invalid target block number");

  const proposals = parameters.slice(2);
  if (!proposals || proposals.length < 1)
    throw new Error("Proposals not provided");

  return { tokenAddress, targetBlockNumber, proposals }
}

async function main() {
  console.log("\n");
  const { tokenAddress, targetBlockNumber, proposals } = validateParameters(process.argv.slice(2));

  console.log(`Deploying ballot with proposals: ${proposals}`);
  console.log("Confirm? (Y/n)");

  const stdin = process.stdin;
  stdin.on("data", async function (d) {
    if (d.toString().trim() == "Y") {
      const publicClient = createPublicClient({
        chain: sepolia,
        transport: http(`https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`),
      });
      const blockNumber = await publicClient.getBlockNumber();
      console.log("Last block number:", blockNumber);

      const account = privateKeyToAccount(`0x${deployerPrivateKey}`);
      const deployer = createWalletClient({
        account,
        chain: sepolia,
        transport: http(`https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`),
      });
      console.log("Deployer address:", deployer.account.address);
      const balance = await publicClient.getBalance({
        address: deployer.account.address,
      });
      console.log(
        "Deployer balance:",
        formatEther(balance),
        deployer.chain.nativeCurrency.symbol
      );

      console.log("\nDeploying Ballot contract");
      const hash = await deployer.deployContract({
        abi,
        bytecode: bytecode as `0x${string}`,
        args: [
          proposals.map((prop) => toHex(prop, { size: 32 })),
          tokenAddress,
          targetBlockNumber
        ]
      });
      console.log("Transaction hash:", hash);
      console.log("Waiting for confirmations...");
      const receipt = await publicClient.waitForTransactionReceipt({ hash });
      const contractAddress = receipt.contractAddress;
      console.log("Ballot contract deployed to:", contractAddress);
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