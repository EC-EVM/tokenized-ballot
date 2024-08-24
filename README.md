# Tokenized Votes
```
ERC20Votes properties
Snapshots
Creating snapshots when supply changes
Using snapshots
Self delegation
Contract overall operation
```
## Getting Started

### Running the Test Script First
-There's a contract MyToken.sol and you can run "npx hardhat compile"<br /> 
-There's a script TestMyToken.ts and you can "npx hardhat run ./scripts/TestMyToken.ts"<br /> 

### How to initialize a new project
-copy all files/folders from voting-contract except artifacts, cache, node_modules<br /> 
-create new tokenized-ballot and paste here<br /> 
-make sure you have the .env file (.gitignore it)<br /> 
create a scripts folder under the root tokenized-ballot folder & then create a TestMyToken.ts file under scripts directory<br /> 
-don't forget to npm i @openzeppelin/contracts

### Creating new branch
1) Click "main" branch button -> then "view all branches" on dropdown -> then click "New branch" button -> add your branch name <br/>
2) On your terminal run: git switch [new_branch_name] eg: git switch graver2 <br/>
3) then git add . -> git commit -m "⚓ first commit"

==============================================

## TODO

### Running a script

The easiest way is to run the CheckVoter.ts script below to check if the address has a voting right/weight, the address has already voted, etc:
```shell 
npx ts-node --files ./scripts/CheckVoter.ts [contractAddress] [address1] 
```
Sample contract: https://sepolia.etherscan.io/address/0x329590c91563584091f6f4d8909728eb1050efec

<img width="667" alt="Screenshot 2024-08-17 at 5 40 34 PM" src="https://github.com/user-attachments/assets/0a027dc5-6606-4f4c-a87b-605faf46e1eb">

</br>

You can also run the PrintResults.ts script below to check the result of votes:
```shell 
npx ts-node --files ./scripts/PrintResults.ts 0x329590c91563584091f6f4d8909728eb1050efec 3 
```

To deploy a new contract you can run the DeployWithViem.ts script below:
```shell 
npx ts-node --files ./scripts/DeployWithViem.ts 
npx ts-node --files ./scripts/DeployWithViem.ts ramen pizza burger 
```


### Installation

-copy all files/folders from project2 except artifacts, cache, node_modules<br /> 
-create new project3 and paste here<br /> 
-make sure you have the .env file (.gitignore it)<br /> 
create a scripts folder under the root project4 folder & then create a DeployWithHardhat.ts file under scripts directory<br /> 

### Prerequisites 
```shell
nvm use --lts   
node -v
v20.14.0
```

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

## Report

Please check into [CONTRACT INTERACTION REPORT](REPORT.md)

## Hardhat 
```shell
npm init
npm install --save-dev hardhat
npx hardhat init
```
-> Create a typescript project

```shell
npx hardhat compile
npx hardhat test
npx hardhat clean


cretae a .mocharc.json with contents:
{
  "require": "hardhat/register",
  "timeout": 40000,
  "_": ["test*/**/*.ts"]
}


rm ./contracts/*
rm ./ignition/*
rm ./test/*
npx hardhat clean
npm i viem
npm install --save-dev @nomicfoundation/hardhat-chai-matchers
```

## References
<img width="516" alt="Screenshot 2024-08-18 at 3 32 13 PM" src="https://github.com/user-attachments/assets/1ad7cd81-ce60-4f71-a9bb-b07b8c541284">

