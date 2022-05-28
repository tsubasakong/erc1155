// https://ethereum.stackexchange.com/questions/84637/deploy-contract-with-ether-js
// https://hardhat.org/guides/compile-contracts.html
// https://docs.ethers.io/v5/api/contract/contract-factory/
// https://docs.ethers.io/v5/api/contract/example/
// https://docs.ethers.io/v5/api/utils/abi/formats/, human-redable contract
// https://docs.ethers.io/v5/api/utils/abi/interface/, method to convert
ethers = require('ethers');

require('dotenv').config();


const bytecode = "0x60806040526008805462ffffff19166201020217905567016345785d8a00006009553480156200002e57600080fd5b5060405162002b7338038062002b73833981016040819052620000519162000286565b6000805460ff19169055806200006781620000a8565b506200007333620000c1565b82516200008890600690602086019062000113565b5081516200009e90600790602085019062000113565b5050505062000354565b8051620000bd90600390602084019062000113565b5050565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b828054620001219062000317565b90600052602060002090601f01602090048101928262000145576000855562000190565b82601f106200016057805160ff191683800117855562000190565b8280016001018555821562000190579182015b828111156200019057825182559160200191906001019062000173565b506200019e929150620001a2565b5090565b5b808211156200019e5760008155600101620001a3565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001e157600080fd5b81516001600160401b0380821115620001fe57620001fe620001b9565b604051601f8301601f19908116603f01168101908282118183101715620002295762000229620001b9565b816040528381526020925086838588010111156200024657600080fd5b600091505b838210156200026a57858201830151818301840152908201906200024b565b838211156200027c5760008385830101525b9695505050505050565b6000806000606084860312156200029c57600080fd5b83516001600160401b0380821115620002b457600080fd5b620002c287838801620001cf565b94506020860151915080821115620002d957600080fd5b620002e787838801620001cf565b93506040860151915080821115620002fe57600080fd5b506200030d86828701620001cf565b9150509250925092565b600181811c908216806200032c57607f821691505b602082108114156200034e57634e487b7160e01b600052602260045260246000fd5b50919050565b61280f80620003646000396000f3fe6080604052600436106101655760003560e01c8063715018a6116100d1578063bd85b0391161008a578063f242432a11610064578063f242432a14610440578063f2fde38b14610460578063f5298aca14610480578063f8685030146104a057600080fd5b8063bd85b039146103b7578063e985e9c5146103e4578063efef39a11461042d57600080fd5b8063715018a6146103105780638456cb59146103255780638da5cb5b1461033a57806391b7f5ed1461036257806395d89b4114610382578063a22cb4651461039757600080fd5b80633f4ba83a116101235780633f4ba83a146102515780634e1273f4146102665780634f558e79146102935780635c975abb146102c25780636817c76c146102da5780636b20c454146102f057600080fd5b8062fdd58e1461016a57806301ffc9a71461019d57806302fe5305146101cd57806306fdde03146101ef5780630e89341c146102115780632eb2c2d614610231575b600080fd5b34801561017657600080fd5b5061018a610185366004611d04565b6104cd565b6040519081526020015b60405180910390f35b3480156101a957600080fd5b506101bd6101b8366004611d44565b610566565b6040519015158152602001610194565b3480156101d957600080fd5b506101ed6101e8366004611e09565b6105b8565b005b3480156101fb57600080fd5b506102046105ee565b6040516101949190611eaa565b34801561021d57600080fd5b5061020461022c366004611ebd565b610680565b34801561023d57600080fd5b506101ed61024c366004611f8b565b610710565b34801561025d57600080fd5b506101ed6107a7565b34801561027257600080fd5b50610286610281366004612035565b6107db565b604051610194919061213b565b34801561029f57600080fd5b506101bd6102ae366004611ebd565b600090815260046020526040902054151590565b3480156102ce57600080fd5b5060005460ff166101bd565b3480156102e657600080fd5b5061018a60095481565b3480156102fc57600080fd5b506101ed61030b36600461214e565b610905565b34801561031c57600080fd5b506101ed61094d565b34801561033157600080fd5b506101ed610981565b34801561034657600080fd5b506005546040516001600160a01b039091168152602001610194565b34801561036e57600080fd5b506101ed61037d366004611ebd565b6109b3565b34801561038e57600080fd5b506102046109e2565b3480156103a357600080fd5b506101ed6103b23660046121c2565b6109f1565b3480156103c357600080fd5b5061018a6103d2366004611ebd565b60009081526004602052604090205490565b3480156103f057600080fd5b506101bd6103ff3660046121fe565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205460ff1690565b6101ed61043b366004611ebd565b610a00565b34801561044c57600080fd5b506101ed61045b366004612231565b610ab1565b34801561046c57600080fd5b506101ed61047b366004612296565b610af6565b34801561048c57600080fd5b506101ed61049b3660046122b1565b610b8e565b3480156104ac57600080fd5b5061018a6104bb366004612296565b600a6020526000908152604090205481565b60006001600160a01b03831661053e5760405162461bcd60e51b815260206004820152602b60248201527f455243313135353a2062616c616e636520717565727920666f7220746865207a60448201526a65726f206164647265737360a81b60648201526084015b60405180910390fd5b5060009081526001602090815260408083206001600160a01b03949094168352929052205490565b60006001600160e01b03198216636cdb3d1360e11b148061059757506001600160e01b031982166303a24d0760e21b145b806105b257506301ffc9a760e01b6001600160e01b03198316145b92915050565b6005546001600160a01b031633146105e25760405162461bcd60e51b8152600401610535906122e4565b6105eb81610bd1565b50565b6060600680546105fd90612319565b80601f016020809104026020016040519081016040528092919081815260200182805461062990612319565b80156106765780601f1061064b57610100808354040283529160200191610676565b820191906000526020600020905b81548152906001019060200180831161065957829003601f168201915b5050505050905090565b6000818152600460205260409020546060906106d75760405162461bcd60e51b81526020600482015260166024820152752aa9249d103737b732bc34b9ba32b73a103a37b5b2b760511b6044820152606401610535565b6106e082610be4565b6106e983610c78565b6040516020016106fa929190612354565b6040516020818303038152906040529050919050565b6001600160a01b03851633148061072c575061072c85336103ff565b6107935760405162461bcd60e51b815260206004820152603260248201527f455243313135353a207472616e736665722063616c6c6572206973206e6f74206044820152711bdddb995c881b9bdc88185c1c1c9bdd995960721b6064820152608401610535565b6107a08585858585610d7e565b5050505050565b6005546001600160a01b031633146107d15760405162461bcd60e51b8152600401610535906122e4565b6107d9610f2b565b565b606081518351146108405760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e677468604482015268040dad2e6dac2e8c6d60bb1b6064820152608401610535565b6000835167ffffffffffffffff81111561085c5761085c611d68565b604051908082528060200260200182016040528015610885578160200160208202803683370190505b50905060005b84518110156108fd576108d08582815181106108a9576108a9612383565b60200260200101518583815181106108c3576108c3612383565b60200260200101516104cd565b8282815181106108e2576108e2612383565b60209081029190910101526108f6816123af565b905061088b565b509392505050565b6001600160a01b038316331480610921575061092183336103ff565b61093d5760405162461bcd60e51b8152600401610535906123ca565b610948838383610fbe565b505050565b6005546001600160a01b031633146109775760405162461bcd60e51b8152600401610535906122e4565b6107d9600061115f565b6005546001600160a01b031633146109ab5760405162461bcd60e51b8152600401610535906122e4565b6107d96111b1565b6005546001600160a01b031633146109dd5760405162461bcd60e51b8152600401610535906122e4565b600955565b6060600780546105fd90612319565b6109fc33838361122c565b5050565b60005460ff1615610a465760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610535565b600854336000908152600a602052604090205461010090910460ff1611610aa85760405162461bcd60e51b81526020600482015260166024820152751b585e081d1e08185b5bdd5b9d08195e18d95959195960521b6044820152606401610535565b6105eb8161130d565b6001600160a01b038516331480610acd5750610acd85336103ff565b610ae95760405162461bcd60e51b8152600401610535906123ca565b6107a085858585856114cf565b6005546001600160a01b03163314610b205760405162461bcd60e51b8152600401610535906122e4565b6001600160a01b038116610b855760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610535565b6105eb8161115f565b6001600160a01b038316331480610baa5750610baa83336103ff565b610bc65760405162461bcd60e51b8152600401610535906123ca565b61094883838361160b565b80516109fc906003906020840190611c4f565b606060038054610bf390612319565b80601f0160208091040260200160405190810160405280929190818152602001828054610c1f90612319565b8015610c6c5780601f10610c4157610100808354040283529160200191610c6c565b820191906000526020600020905b815481529060010190602001808311610c4f57829003601f168201915b50505050509050919050565b606081610c9c5750506040805180820190915260018152600360fc1b602082015290565b8160005b8115610cc65780610cb0816123af565b9150610cbf9050600a83612429565b9150610ca0565b60008167ffffffffffffffff811115610ce157610ce1611d68565b6040519080825280601f01601f191660200182016040528015610d0b576020820181803683370190505b5090505b8415610d7657610d2060018361243d565b9150610d2d600a86612454565b610d38906030612468565b60f81b818381518110610d4d57610d4d612383565b60200101906001600160f81b031916908160001a905350610d6f600a86612429565b9450610d0f565b949350505050565b8151835114610d9f5760405162461bcd60e51b815260040161053590612480565b6001600160a01b038416610dc55760405162461bcd60e51b8152600401610535906124c8565b33610dd481878787878761172c565b60005b8451811015610ebd576000858281518110610df457610df4612383565b602002602001015190506000858381518110610e1257610e12612383565b60209081029190910181015160008481526001835260408082206001600160a01b038e168352909352919091205490915081811015610e635760405162461bcd60e51b81526004016105359061250d565b60008381526001602090815260408083206001600160a01b038e8116855292528083208585039055908b16825281208054849290610ea2908490612468565b9250508190555050505080610eb6906123af565b9050610dd7565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051610f0d929190612557565b60405180910390a4610f2381878787878761173a565b505050505050565b60005460ff16610f745760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606401610535565b6000805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6001600160a01b038316610fe45760405162461bcd60e51b815260040161053590612585565b80518251146110055760405162461bcd60e51b815260040161053590612480565b60003390506110288185600086866040518060200160405280600081525061172c565b60005b83518110156110f057600084828151811061104857611048612383565b60200260200101519050600084838151811061106657611066612383565b60209081029190910181015160008481526001835260408082206001600160a01b038c1683529093529190912054909150818110156110b75760405162461bcd60e51b8152600401610535906125c8565b60009283526001602090815260408085206001600160a01b038b16865290915290922091039055806110e8816123af565b91505061102b565b5060006001600160a01b0316846001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051611141929190612557565b60405180910390a46040805160208101909152600090525b50505050565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60005460ff16156111f75760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610535565b6000805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610fa13390565b816001600160a01b0316836001600160a01b031614156112a05760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c20737461747573604482015268103337b91039b2b63360b91b6064820152608401610535565b6001600160a01b03838116600081815260026020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b600081118015611322575060085460ff168111155b61136e5760405162461bcd60e51b815260206004820152601b60248201527f50757263686173653a20616d6f756e742070726f6869626974656400000000006044820152606401610535565b6000805260046020527f17ef568e3e12ab5b9c7254a8d58478811de00f9e6eb34345acd53bf8fd09d3ec54617530906113a8908390612468565b11156113f65760405162461bcd60e51b815260206004820152601c60248201527f50757263686173653a204d617820737570706c792072656163686564000000006044820152606401610535565b600954611403908261260c565b34146114515760405162461bcd60e51b815260206004820152601b60248201527f50757263686173653a20496e636f7272656374207061796d656e7400000000006044820152606401610535565b336000908152600a60205260408120805460019290611471908490612468565b9250508190555061149433600083604051806020016040528060008152506118a5565b60405181815233906000907ffd51b2c9f55c42d2b72ac683526519563be02fc0107f034ff430c05185ff1b669060200160405180910390a350565b6001600160a01b0384166114f55760405162461bcd60e51b8152600401610535906124c8565b336000611501856119c1565b9050600061150e856119c1565b905061151e83898985858961172c565b60008681526001602090815260408083206001600160a01b038c168452909152902054858110156115615760405162461bcd60e51b81526004016105359061250d565b60008781526001602090815260408083206001600160a01b038d8116855292528083208985039055908a168252812080548892906115a0908490612468565b909155505060408051888152602081018890526001600160a01b03808b16928c821692918816917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4611600848a8a8a8a8a611a0c565b505050505050505050565b6001600160a01b0383166116315760405162461bcd60e51b815260040161053590612585565b33600061163d846119c1565b9050600061164a846119c1565b905061166a8387600085856040518060200160405280600081525061172c565b60008581526001602090815260408083206001600160a01b038a168452909152902054848110156116ad5760405162461bcd60e51b8152600401610535906125c8565b60008681526001602090815260408083206001600160a01b038b81168086529184528285208a8703905582518b81529384018a90529092908816917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a46040805160208101909152600090525b50505050505050565b610f23868686868686611ad6565b6001600160a01b0384163b15610f235760405163bc197c8160e01b81526001600160a01b0385169063bc197c819061177e908990899088908890889060040161262b565b602060405180830381600087803b15801561179857600080fd5b505af19250505080156117c8575060408051601f3d908101601f191682019092526117c591810190612689565b60015b611875576117d46126a6565b806308c379a0141561180e57506117e96126c2565b806117f45750611810565b8060405162461bcd60e51b81526004016105359190611eaa565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e20455243313135356044820152732932b1b2b4bb32b91034b6b83632b6b2b73a32b960611b6064820152608401610535565b6001600160e01b0319811663bc197c8160e01b146117235760405162461bcd60e51b81526004016105359061274c565b6001600160a01b0384166119055760405162461bcd60e51b815260206004820152602160248201527f455243313135353a206d696e7420746f20746865207a65726f206164647265736044820152607360f81b6064820152608401610535565b336000611911856119c1565b9050600061191e856119c1565b905061192f8360008985858961172c565b60008681526001602090815260408083206001600160a01b038b16845290915281208054879290611961908490612468565b909155505060408051878152602081018790526001600160a01b03808a1692600092918716917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a461172383600089898989611a0c565b604080516001808252818301909252606091600091906020808301908036833701905050905082816000815181106119fb576119fb612383565b602090810291909101015292915050565b6001600160a01b0384163b15610f235760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e6190611a509089908990889088908890600401612794565b602060405180830381600087803b158015611a6a57600080fd5b505af1925050508015611a9a575060408051601f3d908101601f19168201909252611a9791810190612689565b60015b611aa6576117d46126a6565b6001600160e01b0319811663f23a6e6160e01b146117235760405162461bcd60e51b81526004016105359061274c565b6001600160a01b038516611b5d5760005b8351811015611b5b57828181518110611b0257611b02612383565b602002602001015160046000868481518110611b2057611b20612383565b602002602001015181526020019081526020016000206000828254611b459190612468565b90915550611b549050816123af565b9050611ae7565b505b6001600160a01b038416610f235760005b8351811015611723576000848281518110611b8b57611b8b612383565b602002602001015190506000848381518110611ba957611ba9612383565b6020026020010151905060006004600084815260200190815260200160002054905081811015611c2c5760405162461bcd60e51b815260206004820152602860248201527f455243313135353a206275726e20616d6f756e74206578636565647320746f74604482015267616c537570706c7960c01b6064820152608401610535565b60009283526004602052604090922091039055611c48816123af565b9050611b6e565b828054611c5b90612319565b90600052602060002090601f016020900481019282611c7d5760008555611cc3565b82601f10611c9657805160ff1916838001178555611cc3565b82800160010185558215611cc3579182015b82811115611cc3578251825591602001919060010190611ca8565b50611ccf929150611cd3565b5090565b5b80821115611ccf5760008155600101611cd4565b80356001600160a01b0381168114611cff57600080fd5b919050565b60008060408385031215611d1757600080fd5b611d2083611ce8565b946020939093013593505050565b6001600160e01b0319811681146105eb57600080fd5b600060208284031215611d5657600080fd5b8135611d6181611d2e565b9392505050565b634e487b7160e01b600052604160045260246000fd5b601f8201601f1916810167ffffffffffffffff81118282101715611da457611da4611d68565b6040525050565b600067ffffffffffffffff831115611dc557611dc5611d68565b604051611ddc601f8501601f191660200182611d7e565b809150838152848484011115611df157600080fd5b83836020830137600060208583010152509392505050565b600060208284031215611e1b57600080fd5b813567ffffffffffffffff811115611e3257600080fd5b8201601f81018413611e4357600080fd5b610d7684823560208401611dab565b60005b83811015611e6d578181015183820152602001611e55565b838111156111595750506000910152565b60008151808452611e96816020860160208601611e52565b601f01601f19169290920160200192915050565b602081526000611d616020830184611e7e565b600060208284031215611ecf57600080fd5b5035919050565b600067ffffffffffffffff821115611ef057611ef0611d68565b5060051b60200190565b600082601f830112611f0b57600080fd5b81356020611f1882611ed6565b604051611f258282611d7e565b83815260059390931b8501820192828101915086841115611f4557600080fd5b8286015b84811015611f605780358352918301918301611f49565b509695505050505050565b600082601f830112611f7c57600080fd5b611d6183833560208501611dab565b600080600080600060a08688031215611fa357600080fd5b611fac86611ce8565b9450611fba60208701611ce8565b9350604086013567ffffffffffffffff80821115611fd757600080fd5b611fe389838a01611efa565b94506060880135915080821115611ff957600080fd5b61200589838a01611efa565b9350608088013591508082111561201b57600080fd5b5061202888828901611f6b565b9150509295509295909350565b6000806040838503121561204857600080fd5b823567ffffffffffffffff8082111561206057600080fd5b818501915085601f83011261207457600080fd5b8135602061208182611ed6565b60405161208e8282611d7e565b83815260059390931b85018201928281019150898411156120ae57600080fd5b948201945b838610156120d3576120c486611ce8565b825294820194908201906120b3565b965050860135925050808211156120e957600080fd5b506120f685828601611efa565b9150509250929050565b600081518084526020808501945080840160005b8381101561213057815187529582019590820190600101612114565b509495945050505050565b602081526000611d616020830184612100565b60008060006060848603121561216357600080fd5b61216c84611ce8565b9250602084013567ffffffffffffffff8082111561218957600080fd5b61219587838801611efa565b935060408601359150808211156121ab57600080fd5b506121b886828701611efa565b9150509250925092565b600080604083850312156121d557600080fd5b6121de83611ce8565b9150602083013580151581146121f357600080fd5b809150509250929050565b6000806040838503121561221157600080fd5b61221a83611ce8565b915061222860208401611ce8565b90509250929050565b600080600080600060a0868803121561224957600080fd5b61225286611ce8565b945061226060208701611ce8565b93506040860135925060608601359150608086013567ffffffffffffffff81111561228a57600080fd5b61202888828901611f6b565b6000602082840312156122a857600080fd5b611d6182611ce8565b6000806000606084860312156122c657600080fd5b6122cf84611ce8565b95602085013595506040909401359392505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600181811c9082168061232d57607f821691505b6020821081141561234e57634e487b7160e01b600052602260045260246000fd5b50919050565b60008351612366818460208801611e52565b83519083019061237a818360208801611e52565b01949350505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60006000198214156123c3576123c3612399565b5060010190565b60208082526029908201527f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260408201526808185c1c1c9bdd995960ba1b606082015260800190565b634e487b7160e01b600052601260045260246000fd5b60008261243857612438612413565b500490565b60008282101561244f5761244f612399565b500390565b60008261246357612463612413565b500690565b6000821982111561247b5761247b612399565b500190565b60208082526028908201527f455243313135353a2069647320616e6420616d6f756e7473206c656e677468206040820152670dad2e6dac2e8c6d60c31b606082015260800190565b60208082526025908201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604082015264647265737360d81b606082015260800190565b6020808252602a908201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60408201526939103a3930b739b332b960b11b606082015260800190565b60408152600061256a6040830185612100565b828103602084015261257c8185612100565b95945050505050565b60208082526023908201527f455243313135353a206275726e2066726f6d20746865207a65726f206164647260408201526265737360e81b606082015260800190565b60208082526024908201527f455243313135353a206275726e20616d6f756e7420657863656564732062616c604082015263616e636560e01b606082015260800190565b600081600019048311821515161561262657612626612399565b500290565b6001600160a01b0386811682528516602082015260a06040820181905260009061265790830186612100565b82810360608401526126698186612100565b9050828103608084015261267d8185611e7e565b98975050505050505050565b60006020828403121561269b57600080fd5b8151611d6181611d2e565b600060033d11156126bf5760046000803e5060005160e01c5b90565b600060443d10156126d05790565b6040516003193d81016004833e81513d67ffffffffffffffff816024840111818411171561270057505050505090565b82850191508151818111156127185750505050505090565b843d87010160208285010111156127325750505050505090565b61274160208286010187611d7e565b509095945050505050565b60208082526028908201527f455243313135353a204552433131353552656365697665722072656a656374656040820152676420746f6b656e7360c01b606082015260800190565b6001600160a01b03868116825285166020820152604081018490526060810183905260a0608082018190526000906127ce90830184611e7e565b97965050505050505056fea264697066735822122045758d69733af05625bd9616c038ac12c59e4bcd2b2be54ca0a6a2af791e32d264736f6c63430008090033"

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
// const bytecode = process.env.BYTECODE;
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

