// https://ethereum.stackexchange.com/questions/84637/deploy-contract-with-ether-js
// https://hardhat.org/guides/compile-contracts.html
// https://docs.ethers.io/v5/api/contract/contract-factory/
// https://docs.ethers.io/v5/api/contract/example/
ethers = require('ethers');

require('dotenv').config();

const abi = [
    'constructor(string _name, string _symbol, string _uri)',
    'event ApprovalForAll(address indexed account, address indexed operator, bool approved)',
    'event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)',
    'event Paused(address account)',
    'event Purchased(uint256 indexed index, address indexed account, uint256 amount)',
    'event TransferBatch(address indexed operator, address indexed from, address indexed to, uint256[] ids, uint256[] values)',
    'event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 value)',
    'event URI(string value, uint256 indexed id)',
    'event Unpaused(address account)',
    'function balanceOf(address account, uint256 id) view returns (uint256)',
    'function balanceOfBatch(address[] accounts, uint256[] ids) view returns (uint256[])',
    'function burn(address account, uint256 id, uint256 value)',
    'function burnBatch(address account, uint256[] ids, uint256[] values)',
    'function exists(uint256 id) view returns (bool)',
    'function isApprovedForAll(address account, address operator) view returns (bool)',
    'function mintPrice() view returns (uint256)',
    'function name() view returns (string)',
    'function owner() view returns (address)',
    'function pause()',
    'function paused() view returns (bool)',
    'function purchase(uint256 amount) payable',
    'function purchaseTxs(address) view returns (uint256)',
    'function renounceOwnership()',
    'function safeBatchTransferFrom(address from, address to, uint256[] ids, uint256[] amounts, bytes data)',
    'function safeTransferFrom(address from, address to, uint256 id, uint256 amount, bytes data)',
    'function setApprovalForAll(address operator, bool approved)',
    'function setPrice(uint256 _mintPrice)',
    'function setURI(string baseURI)',
    'function supportsInterface(bytes4 interfaceId) view returns (bool)',
    'function symbol() view returns (string)',
    'function totalSupply(uint256 id) view returns (uint256)',
    'function transferOwnership(address newOwner)',
    'function unpause()',
    'function uri(uint256 _id) view returns (string)'
  ];
//load 'ethers' and 'fs'



//Read bin and abi file to object; names of the solcjs-generated files renamed
const bytecode = process.env.BYTECODE;
console.log("bytecode", bytecode);

console.log("abi", abi);

const apiToken = process.env.ALCHEMY_API_URL;
console.log("apiToken", apiToken);
const privateKey = process.env.RINKEBY_PRIVATE_KEY;
console.log("privateKey", privateKey);
//to create 'signer' object;here 'account'

const provider = new ethers.providers.WebSocketProvider(apiToken);
const wallet = new ethers.Wallet(privateKey);
const account = wallet.connect(provider);

// some issue to use signer method https://github.com/ethers-io/ethers.js/issues/948#issuecomment-1016993929 
// const signer = provider.getSigner();
// console.log("signer", signer);

// console.log("account", account);

const myContract = new ethers.ContractFactory(abi, bytecode, account);
// const myContract = new ethers.ContractFactory(abi, bytecode, signer);
//Ussing async-await for deploy method
async function main() {
// If your contract requires constructor args, you can specify them here
const contract = await myContract.deploy("test","test","google");

console.log("contract address", contract.address);
console.log("trasaction record", contract.deployTransaction);
}

// main();


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

