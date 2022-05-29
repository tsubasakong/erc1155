// learn examples from https://github.com/tsubasakong/nft-erc721-collection/blob/main/smart-contract/test/index.ts

const { expect } = require("chai");
const { ethers } = require("hardhat");
const { utils }  = require("ethers")

describe("Adidas", function () {
  let owner;
  let adidas;

  beforeEach("adidass contract intizial", async function () {
    // const Greeter = await ethers.getContractFactory("Greeter");
    // const greeter = await Greeter.deploy("Hello, world!");
    // await greeter.deployed();

    // expect(await greeter.greet()).to.equal("Hello, world!");

    // const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // // wait until the transaction is mined
    // await setGreetingTx.wait();

    // expect(await greeter.greet()).to.equal("Hola, mundo!");
    [owner, address1] = await ethers.getSigners();

    const Adidas = await hre.ethers.getContractFactory("Shop3Collection");
    adidas = await Adidas.deploy("test","test","https://google.com/", "10000000000000000", 0); // unlimited mint
  
    await adidas.deployed();
  
    console.log("Adidas deployed to:", adidas.address);
    
    // console.log("mint price", await adidas.mintPrice());
    // expect(await adidas.mintPrice()).to.equal(utils.parseEther("0.1"));

    // console.log("token id 0 uri ", await adidas.uri(1))
  
  });
  // https://dev.to/jacobedawson/import-test-a-popular-nft-smart-contract-with-hardhat-ethers-12i5
  it ("should mint an token", async () => {
    let min_amount = 10;
    // use BigNumber to prevent overflow or underflow https://docs.ethers.io/v5/troubleshooting/errors/
    const mintPrice =  ethers.BigNumber.from(String(await adidas.mintPrice()));
    console.log("mint price",mintPrice);
    expect(
      await adidas.purchase(min_amount, {
        value: mintPrice.mul(min_amount),
      })
    )
    .to.emit(adidas, "Purchased") //Purchased(0, msg.sender, amount);
    .withArgs(0, owner,min_amount);

    console.log("token uri", await adidas.uri(0))
  })

  // insufficient purchase value
  it("insufficnet purchase value", async () => {
    let min_amount = 1;

    const mintPrice =  ethers.BigNumber.from(String(await adidas.mintPrice()));
    const send_value = mintPrice.mul(min_amount).div(2);
    // await before "expet", not inside the transaction call "purchase"
    await expect(
      adidas.purchase(min_amount, {
        value: send_value,
      })
    ).to.be.revertedWith("Purchase: Incorrect payment");
  }


  )
  
});

