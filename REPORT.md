# Weekend Project 3

### Project instructions

This is a group activity for at least 3 students:

- Develop and run scripts for “TokenizedBallot.sol” within your group to give voting tokens, delegating voting power, casting votes, checking vote power and querying results
- Write a report with each function execution and the transaction hash, if successful, or the revert reason, if failed
- Submit your weekend project by filling the form provided in Discord
- Submit your code in a github repository in the form

## Group 2

| Unique id | Discord username    |
| --------- | ------------------- |
| RAAzLF    | @GRAVER 👾                |
| 2SyBp0    | @wackozacco        |
| 10exgX    | @δαλλασκατ    |
| r5YSqY    | @imchrismayfield          |
| HhHAQw    | @swooz                |
| Pok9XD    | @Timster            |
| T5zGzt    | @Carl Youngblood            |

## List of interactions

1. 💫 **[Pass]:** @Timster deployed `TokenizedBallot.sol` smart contract on Sepolia testnet
    1. `npx ts-node --files scripts/DeployMyToken.ts`
    2. [TokenizedBallot.sol contract deployed on Sepolia testnet](https://sepolia.etherscan.io/address/0x3c9d658a9b358cf1985bc52c5476229e8b186f1f)
    3. [Script ↗](./scripts/DeployMyToken.ts)

2. 💫 **[Pass]:** @Timster granted minter role to `0x8f4db4f817bb198895320d03a0629a69e6be13b8`
    1. `npx ts-node --files scripts/GrantMinterRole.ts 0x3c9d658a9b358cf1985bc52c5476229e8b186f1f 0x8f4db4f817bb198895320d03a0629a69e6be13b8`
    2. [TxHash (0xd5a...2ba)](https://sepolia.etherscan.io/tx/0xd5a409305ec8eaad0be74cc1ab19e2ce81a94c61af622f8e6d91195d385b62ba)
    3. [Script ↗](./scripts/GrantMinterRole.ts)

3. 💫 **[Pass]:** @Timster granted minter role to `0x8152ae0be775ee8c530b5b13f229d75adc9291b0`
    1. `npx ts-node --files scripts/GrantMinterRole.ts 0x3c9d658a9b358cf1985bc52c5476229e8b186f1f 0x8152ae0be775ee8c530b5b13f229d75adc9291b0`
    2. [TxHash (0x424...194)](https://sepolia.etherscan.io/tx/0x42402acbf50e6c7a93b64b886aaac3a2ed44f4e04fdb2969c42ede8abf0ba194)
    3. [Script ↗](./scripts/GrantMinterRole.ts)
