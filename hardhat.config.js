require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-ethers');
require('hardhat-gas-reporter');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
const settings = {
  optimizer: {
    enabled: true,
    runs: 200,
  },
};
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      { version: "0.8.9", settings },
    ],
  },

  gasReporter: {
    enable: true,
    currency: 'USD',
  },

};


// module.exports = {
//   solidity: {
//     compilers: [
//       { version: '0.5.16', settings },
//       { version: '0.6.12', settings },
//       { version: '0.7.6',  settings },
//       { version: '0.8.2',  settings },
//     ],
//   },
//   gasReporter: {
//     enable: true,
//     currency: 'USD',
//   },
// };
