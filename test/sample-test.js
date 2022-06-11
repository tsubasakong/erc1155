// learn examples
// to get the singer address, the first is default to owner https://hardhat.org/hardhat-network/#running-stand-alone-in-order-to-support-wallets-and-other-software 
// [owner, whitelistedUser, holder, externalUser] = await ethers.getSigners();

const { expect } = require("chai");
const { ethers } = require("hardhat");
const { utils }  = require("ethers")

describe("Lab3 designer collections", function () {
  let owner;
  let shop3;

  beforeEach("shop3 contract intizial", async function () {
  
    [owner, address1] = await ethers.getSigners();

    const Shop3Collection = await hre.ethers.getContractFactory("Shop3Collection");
    shop3 = await Shop3Collection.deploy("test","test","https://google.com/", "10000000000000000", 0); // unlimited mint
  
    await shop3.deployed();
  
    console.log("shop3 deployed to:", shop3.address);
    
   
  
  });
  // https://dev.to/jacobedawson/import-test-a-popular-nft-smart-contract-with-hardhat-ethers-12i5
  it ("should mint an token", async () => {
    let min_amount = 10;
    // use BigNumber to prevent overflow or underflow https://docs.ethers.io/v5/troubleshooting/errors/
    const mintPrice =  ethers.BigNumber.from(String(await shop3.mintPrice()));
    console.log("mint price",mintPrice);
    expect(
      await shop3.purchase(min_amount, {
        value: mintPrice.mul(min_amount),
      })
    )
    .to.emit(shop3, "Purchased") //Purchased(0, msg.sender, amount);
    .withArgs(0, owner,min_amount);

    // expect(
    //   await shop3.purchase(min_amount, {
    //     value: mintPrice.mul(min_amount),
    //   })
    // )
    // .to.emit(shop3, "Purchased") //Purchased(0, msg.sender, amount);
    // .withArgs(0, owner,min_amount);

    console.log("token uri", await shop3.uri(0))
  })

  // insufficient purchase value
  // it("insufficnet purchase value", async () => {
  //   let min_amount = 1;

  //   const mintPrice =  ethers.BigNumber.from(String(await shop3.mintPrice()));
  //   const send_value = mintPrice.mul(min_amount).div(2);
  //   // await before "expet", not inside the transaction call "purchase"
  //   await expect(
  //     shop3.purchase(min_amount, {
  //       value: send_value,
  //     })
  //   ).to.be.revertedWith("Purchase: Incorrect payment");
  // }

  // )
  
});

