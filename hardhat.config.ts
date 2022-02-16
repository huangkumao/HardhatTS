import { task, HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import dotenv from "dotenv";

dotenv.config();

task("accounts", "Prints the list of accounts").setAction(async (taskArgs, hre) =>
{
  console.log("args : " + taskArgs);
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts)
  {
    console.log(account.address);
  }
});


const config: HardhatUserConfig =
{
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
};

export default config;
