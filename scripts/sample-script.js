// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main(name, symbol, token_uri) {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Adidas = await hre.ethers.getContractFactory("AdidasOriginals");
  const adidas = await Adidas.deploy(name,symbol,token_uri);//,"https://google.com/"

  await adidas.deployed();

  console.log("Adidas deployed to:", adidas.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
let _name = "test";
let _symbol = "test"
let _token_uri = "https://google";

main(_name, _symbol, _token_uri)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
