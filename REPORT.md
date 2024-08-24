# Weekend Project 3

### Project instructions

This is a group activity for at least 3 students:

- Develop and run scripts for “TokenizedBallot.sol” within your group to give voting tokens, delegating voting power, casting votes, checking vote power and querying results
- Write a report with each function execution and the transaction hash, if successful, or the revert reason, if failed
- Submit your weekend project by filling the form provided in Discord
- Submit your code in a github repository in the form

## Group 2

| Unique id | Discord username    | Wallet address                    |
| --------- | ------------------- | --------------------------------- |
| RAAzLF    | @GRAVER 👾                | |
| 2SyBp0    | @wackozacco        | |
| 10exgX    | @δαλλασκατ    | |
| r5YSqY    | @imchrismayfield          | |
| HhHAQw    | @swooz                | |
| Pok9XD    | @Timster            | `0x61DD404C7AFDEEc54AC246c1e1d92B23D1b9f594` |
| T5zGzt    | @Carl Youngblood    | `0x822d80ecd89b2aae0c52590c7f1351351e720eaa` |

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

4. 💫 **[Pass]:** `0x8f4db4F817BB198895320d03A0629a69e6bE13B8` minted 100n to himself
    1. `npx ts-node --files scripts/MintTokens.ts 0x3c9d658a9b358cf1985bc52c5476229e8b186f1f 0x8f4db4f817bb198895320d03a0629a69e6be13b8 1000`
    2. [TxHash (0x05d...a6f)](https://sepolia.etherscan.io/tx/0x05d5b2b7a1ad59ba3cdaa7dd578a15f049c1772769af285fe7f8843ec301aa6f)
    3. [Script ↗](./scripts/MintTokens.ts)

5. 💫 **[Pass]:** @Timster minted 1000n to @Carl Youngblood
    1. `npx ts-node --files scripts/MintTokens.ts 0x3c9d658a9b358cf1985bc52c5476229e8b186f1f 0x822d80ecd89b2aae0c52590c7f1351351e720eaa 1000`
    2. [TxHash (0x0f0...d9b)](https://sepolia.etherscan.io/tx/0x0f0ba33145c3c3f660bd573b88a0012a7530c0aad6cd9fded3a9bea9a1784d9b)
    3. [Script ↗](./scripts/MintTokens.ts)

6. 💫 **[Pass]:** @Timster minted 1000n to `0x55631f259de138bcaccfd54d17c6597c58241be4`
    1. `npx ts-node --files scripts/MintTokens.ts 0x3c9d658a9b358cf1985bc52c5476229e8b186f1f 0x55631f259de138bcaccfd54d17c6597c58241be4 1000`
    2. [TxHash (0xc31...d47)](https://sepolia.etherscan.io/tx/0xc31eb244dd7bcc98d3a8e5aa5c588c5b454348b2ab2760aeaebd8703e0801d47)
    3. [Script ↗](./scripts/MintTokens.ts)

7.  💫 **[Pass]:** @Carl Youngblood delegated his votes to himself
    1. `npx ts-node --files scripts/DelegateVotes.ts 0x3c9d658a9b358cf1985bc52c5476229e8b186f1f 0x822D80eCd89b2aae0c52590c7f1351351E720EAa`
    2. [TxHash (0x403...d44)](https://sepolia.etherscan.io/tx/0x40371ef6ed060c6a888f9affd18921343627956f4e2d0dfb297a0f30ff7f4d44)
    3. [Script ↗](./scripts/DelegateVotes.ts)

8. 💫 **[Pass]:** @Timster minted 1000n to `0x117556e746eED7053dD99dEb9fae019CbaC2013E`
    1. `npx ts-node --files scripts/MintTokens.ts 0x3c9d658a9b358cf1985bc52c5476229e8b186f1f 0x117556e746eED7053dD99dEb9fae019CbaC2013E 1000`
    2. [TxHash (0xe39...04d)](https://sepolia.etherscan.io/tx/0xe39ff1c2a4c9eeb9af323d336870e34ddf472ad49517c0793d7343443f2c904d)
    3. [Script ↗](./scripts/MintTokens.ts)

9. 💫 **[Pass]:** `0x8f4db4F817BB198895320d03A0629a69e6bE13B8` minted 900n to himself
    1. `npx ts-node --files scripts/MintTokens.ts 0x3c9d658a9b358cf1985bc52c5476229e8b186f1f 0x8f4db4F817BB198895320d03A0629a69e6bE13B8 900`
    2. [TxHash (0xdb...5df)](https://sepolia.etherscan.io/tx/0xdbb16c418b8666c6934fbf3d5a06be757bb97c52dfef1fec38fd9310a34855df)
    3. [Script ↗](./scripts/MintTokens.ts)

10. 💫 **[Pass]:** @Timster minted 1000n to `0x99940BeaCB5FC1d87b7Df18736559c66A0f98b23`
    1. `npx ts-node --files scripts/MintTokens.ts 0x3c9d658a9b358cf1985bc52c5476229e8b186f1f 0x99940BeaCB5FC1d87b7Df18736559c66A0f98b23 1000`
    2. [TxHash (0x7fa...648)](https://sepolia.etherscan.io/tx/0x7faf2698720ddf8d53aff68b6ac9d35b62ec0dd687a16eeb3d707a55f77df648)
    3. [Script ↗](./scripts/MintTokens.ts)

11. 💫 **[Pass]:** `0x8f4db4F817BB198895320d03A0629a69e6bE13B8` delegated his votes to himself
    1. `npx ts-node --files scripts/DelegateVotes.ts 0x3c9d658a9b358cf1985bc52c5476229e8b186f1f 0x8f4db4F817BB198895320d03A0629a69e6bE13B8`
    2. [TxHash (0xa45...8c0)](https://sepolia.etherscan.io/tx/0xa452cb63bcad895b0dd44b73ac3c5f60cf28b00c72598f3635142278e62818c0)
    3. [Script ↗](./scripts/DelegateVotes.ts)

12. 💫 **[Pass]:** `0x99940BeaCB5FC1d87b7Df18736559c66A0f98b23` delegated his votes to `0x8071527946235eF9Ca115bd409C8487496BEbF9B`
    1. `npx ts-node --files scripts/DelegateVotes.ts 0x3c9d658a9b358cf1985bc52c5476229e8b186f1f 0x8071527946235eF9Ca115bd409C8487496BEbF9B`
    2. [TxHash (0x9cc...425)](https://sepolia.etherscan.io/tx/0x9ccc81d9de8f036f7559ca724b88255880a4b8dc21a9baedc078835dbacde425)
    3. [Script ↗](./scripts/DelegateVotes.ts)

13. 💫 **[Pass]:** `0x8152ae0BE775eE8C530b5b13f229D75ADc9291b0` minted 1000n to himself
    1. `npx ts-node --files scripts/MintTokens.ts 0x3c9d658a9b358cf1985bc52c5476229e8b186f1f 0x8152ae0BE775eE8C530b5b13f229D75ADc9291b0 1000`
    2. [TxHash (0x556...3b5)](https://sepolia.etherscan.io/tx/0x556d96ec87b06b93e69d83c4bb9aa8fd6588f7aab7042f6509eded5eda0cd3b5)
    3. [Script ↗](./scripts/MintTokens.ts)

14. 💫 **[Pass]:** `0x8152ae0BE775eE8C530b5b13f229D75ADc9291b0` delegated his votes to himself
    1. `npx ts-node --files scripts/DelegateVotes.ts 0x3c9d658a9b358cf1985bc52c5476229e8b186f1f 0x8152ae0BE775eE8C530b5b13f229D75ADc9291b0`
    2. [TxHash (0x8f6...990)](https://sepolia.etherscan.io/tx/0x8f6c27c342bfa9b94745c14eb5da647288092035f47dac1a02c877795c735990)
    3. [Script ↗](./scripts/DelegateVotes.ts)

15. 💫 **[Pass]:** `0x55631F259DE138bCaccfd54D17C6597C58241bE4` delegated his votes to himself
    1. `npx ts-node --files scripts/DelegateVotes.ts 0x3c9d658a9b358cf1985bc52c5476229e8b186f1f 0x55631F259DE138bCaccfd54D17C6597C58241bE4`
    2. [TxHash (0x312...195)](https://sepolia.etherscan.io/tx/0x3123b35a7df87a33f0fb37272be05e88d9c46a8f2492a075c8bace7a00472195)
    3. [Script ↗](./scripts/DelegateVotes.ts)
