// npx ts-node --files ./scripts/ViewProposalStatus.ts CONTRACT_ADDRESS

import { createPublicClient, http, hexToString, ContractFunctionExecutionError } from "viem";

import { sepolia } from "viem/chains";
import { abi } from "../artifacts/contracts/TokenizedBallot.sol/TokenizedBallot.json";
import * as dotenv from "dotenv";
dotenv.config();

const providerApiKey = process.env.ALCHEMY_API_KEY || "";

function validateParameters(parameters: string[]) {
  if (!parameters || parameters.length < 1)
    throw new Error("Parameters not provided");

  const contractAddress = parameters[0] as `0x${string}`;
  if (!contractAddress) throw new Error("Contract address not provided");
  if (!/^0x[a-fA-F0-9]{40}$/.test(contractAddress))
    throw new Error("Invalid contract address");

  return { contractAddress }
}

async function fetchProposals(publicClient: any, contractAddress: string) {
  let proposals: object[] = [];
  let proposalIndex = 0;
  let moreProposals = true;

  while (moreProposals) {
    try {
      const proposal = (await publicClient.readContract({
        address: contractAddress,
        abi,
        functionName: "proposals",
        args: [BigInt(proposalIndex)],
      })) as any[];

      const name = hexToString(proposal[0], { size: 32 });
      const votes = proposal[1];
      proposals.push({index: proposalIndex, name, votes});

      proposalIndex++;
    } catch (error) {
      moreProposals = false;

      if (!(error instanceof ContractFunctionExecutionError)) {
        console.error('An unexpected error occurred:', error);
      }
    }
  }

  return proposals;
}

async function main() {
  console.log("\n");
  const { contractAddress } = validateParameters(process.argv.slice(2));

  const publicClient = createPublicClient({
    chain: sepolia,
    transport: http(`https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`),
  });

  const proposals = await fetchProposals(publicClient, contractAddress);
  console.log(`${proposals.length} proposals found:`);
  for (let index = 0; index < proposals.length; index++) {
    console.log(proposals[index]);
  }

  const winnerName = (await publicClient.readContract({
    address: contractAddress,
    abi,
    functionName: "winnerName",
  })) as `0x${string}`;
  console.log(`\nWinner: ${hexToString(winnerName, { size: 32 })}`);

  process.exit();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});