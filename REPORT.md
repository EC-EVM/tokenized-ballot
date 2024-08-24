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

4. 💫 **[Pass]:** @Timster minted 1000n to `0x8f4db4f817bb198895320d03a0629a69e6be13b8`
    1. `npx ts-node --files scripts/MintTokens.ts 0x3c9d658a9b358cf1985bc52c5476229e8b186f1f 0x8f4db4f817bb198895320d03a0629a69e6be13b8 1000`
    2. [TxHash (0x05d...a6f)](https://sepolia.etherscan.io/tx/0x05d5b2b7a1ad59ba3cdaa7dd578a15f049c1772769af285fe7f8843ec301aa6f)
    3. [Script ↗](./scripts/MintTokens.ts)

5. 💫 **[Pass]:** @Timster minted 1000n to `0x822d80ecd89b2aae0c52590c7f1351351e720eaa` (@Carl Youngblood)
    1. `npx ts-node --files scripts/MintTokens.ts 0x3c9d658a9b358cf1985bc52c5476229e8b186f1f 0x822d80ecd89b2aae0c52590c7f1351351e720eaa 1000`
    2. [TxHash (0x0f0...d9b)](https://sepolia.etherscan.io/tx/0x0f0ba33145c3c3f660bd573b88a0012a7530c0aad6cd9fded3a9bea9a1784d9b)
    3. [Script ↗](./scripts/MintTokens.ts)

6. 💫 **[Pass]:** @Timster minted 1000n to `0x55631f259de138bcaccfd54d17c6597c58241be4`
    1. `npx ts-node --files scripts/MintTokens.ts 0x3c9d658a9b358cf1985bc52c5476229e8b186f1f 0x55631f259de138bcaccfd54d17c6597c58241be4 1000`
    2. [TxHash (0xc31...d47)](https://sepolia.etherscan.io/tx/0xc31eb244dd7bcc98d3a8e5aa5c588c5b454348b2ab2760aeaebd8703e0801d47)
    3. [Script ↗](./scripts/MintTokens.ts)

7.  💫 **[Pass]:** @Carl Youngblood delegated 1000n to himself
    1. `npx ts-node --files scripts/DelegateVotes.ts 0x3c9d658a9b358cf1985bc52c5476229e8b186f1f 0x822D80eCd89b2aae0c52590c7f1351351E720EAa`
    2. [TxHash (0x403...d44)](https://sepolia.etherscan.io/tx/0x40371ef6ed060c6a888f9affd18921343627956f4e2d0dfb297a0f30ff7f4d44)
    3. [Script ↗](./scripts/DelegateVotes.ts)
