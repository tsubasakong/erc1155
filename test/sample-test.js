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

    const Adidas = await hre.ethers.getContractFactory("AdidasOriginals");
    adidas = await Adidas.deploy("test","test","https://google.com/");
  
    await adidas.deployed();
  
    console.log("Adidas deployed to:", adidas.address);
    
    // console.log("mint price", await adidas.mintPrice());
    // expect(await adidas.mintPrice()).to.equal(utils.parseEther("0.1"));

    // console.log("token id 0 uri ", await adidas.uri(1))
  
  });
  // https://dev.to/jacobedawson/import-test-a-popular-nft-smart-contract-with-hardhat-ethers-12i5
  it ("should mint an token", async () => {
    
    const mintPrice = await adidas.mintPrice();
    console.log("mint price",mintPrice);
    expect(
      await adidas.purchase(1, {
        value: mintPrice,
      })
    )
    .to.emit(adidas, "Purchased") //Purchased(0, msg.sender, amount);
    .withArgs(0, owner,1);

    console.log("token uri", await adidas.uri(0))
  })
});

// describe("Bored Ape", () => {
//   let boredApeContract: Contract;
//   let owner: SignerWithAddress;
//   let address1: SignerWithAddress;

//   beforeEach(async () => {
//     const BoredApeFactory = await ethers.getContractFactory(
//       "BoredApeYachtClub"
//     );
//     [owner, address1] = await ethers.getSigners();
//     boredApeContract = await BoredApeFactory.deploy(
//       "Bored Ape Yacht Club",
//       "BAYC",
//       10000,
//       1
//     );
//   });

//   it("Should initialize the Bored Ape contract", async () => {
//     expect(await boredApeContract.MAX_APES()).to.equal(10000);
//   });

//   it("Should set the right owner", async () => {
//     expect(await boredApeContract.owner()).to.equal(await owner.address);
//   });

//   it("Should mint an ape", async () => {
//     await boredApeContract.flipSaleState();
//     const apePrice = await boredApeContract.apePrice();
//     const tokenId = await boredApeContract.totalSupply();
//     expect(
//       await boredApeContract.mintApe(1, {
//         value: apePrice,
//       })
//     )
//       .to.emit(boredApeContract, "Transfer")
//       .withArgs(ethers.constants.AddressZero, owner.address, tokenId);
//   });
// });
