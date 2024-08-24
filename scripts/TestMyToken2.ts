import { viem } from 'hardhat';
import { parseEther } from "viem";

const MINT_VALUE = parseEther("0.0000000000000001");

async function main() {
  // A Public Client is an interface to "public" JSON-RPC API methods such as retrieving block numbers, transactions, reading from smart contracts, etc through Public Actions.  
  const publicClient = await viem.getPublicClient();
  const [deployer, acc1, acc2] = await viem.getWalletClients();
  const contract = await viem.deployContract("MyToken");
  console.log(`Token contract deployed at ${contract.address}\n`);
  // Token contract deployed at 0x5fbdb2315678afecb367f032d93f642f64180aa3

  // try to mint some tokens graver2
  const mintTx = await contract.write.mint([acc1.account.address, MINT_VALUE]);
  await publicClient.waitForTransactionReceipt({ hash: mintTx });
    console.log(
      `Minted ${MINT_VALUE.toString()} decimal units to account ${
        acc1.account.address
      }\n`
    // Minted 100 decimal units to account 0x70997970c51812dc3a010c7d01b50e0d17dc79c8
  );
  const balanceBN = await contract.read.balanceOf([acc1.account.address]);
    console.log(
      `Account ${
        acc1.account.address
      } has ${balanceBN.toString()} decimal units of MyToken\n`
    // Account 0x70997970c51812dc3a010c7d01b50e0d17dc79c8 has 100 decimal units of MyToken
  );

  // checking voting power
  const votes = await contract.read.getVotes([acc1.account.address]);
  console.log(
  `Account ${
    acc1.account.address
  } has ${votes.toString()} units of voting power before self delegating\n`
  // Account 0x70997970c51812dc3a010c7d01b50e0d17dc79c8 has 0 units of voting power before self delegating
  ); 
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});