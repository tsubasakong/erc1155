require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-ethers');
require('hardhat-gas-reporter');
require("@nomiclabs/hardhat-etherscan");

// const path = require('path')
// require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
require('dotenv').config();

const ALCHEMY_API_URL = process.env.ALCHEMY_API_URL;
const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY.toString();
// https://docs.palm.io/HowTo/Deploy-using-Hardhat/
// dotenv.config();
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
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
    },
    rinkeby: {
      url: ALCHEMY_API_URL,
      accounts: ["0x"+RINKEBY_PRIVATE_KEY],
    }
  },
  solidity: {
    compilers: [
      { version: "0.8.9", settings },
    ],
  },

  gasReporter: {
    enable: true,
    currency: 'USD',
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: process.env.ETHERSCAN_API
  },
  
};

// module.exports = {
//   defaultNetwork: "rinkeby",
//   networks: {
//     hardhat: {
//     },
//     rinkeby: {
//       url: "https://eth-rinkeby.alchemyapi.io/v2/123abc123abc123abc123abc123abcde",
//       accounts: [privateKey1, privateKey2, ...]
//     }
//   },
//   solidity: {
//     version: "0.5.15",
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 200
//       }
//     }
//   },
//   paths: {
//     sources: "./contracts",
//     tests: "./test",
//     cache: "./cache",
//     artifacts: "./artifacts"
//   },
//   mocha: {
//     timeout: 40000
//   }
// }


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
