// SPDX-License-Identifier: MIT


pragma solidity ^0.8.9;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

import './AbstractERC1155Factory.sol';

/*
* @title ERC1155 token for Web3Shop designer collections
* @author Lab3
*/
contract Shop3Collection is AbstractERC1155Factory  {



    uint256 public maxSupply = 0; // 0: unlimited supply
    uint256 public mintPrice;
    uint256 maxPerTx = 100;
   
    


    event Purchased(uint256 indexed index, address indexed account, uint256 amount);

    constructor(
        string memory _name,
        string memory _symbol,
        string memory _uri,
        uint256 _mintPrice,
        uint256 _maxSupply
       

        
    ) ERC1155(_uri)  {
        name_ = _name;
        symbol_ = _symbol;
        mintPrice = _mintPrice;
        maxSupply = _maxSupply;
    }

    /**
    * @notice edit the mint price
    *
    * @param _mintPrice the new price in wei
    */
    function setPrice(uint256 _mintPrice) external onlyOwner {
        mintPrice = _mintPrice;
    }

    
    
    

    /**
    * @notice purchase cards during public sale
    *
    * @param amount the amount of tokens to purchase
    */
    function purchase(uint256 amount) external payable whenNotPaused {

        _purchase(amount);

    }

    /**
    * @notice global purchase function used in early access and public sale
    *
    * @param amount the amount of tokens to purchase
    */
    function _purchase(uint256 amount) private {
        require(amount > 0 && amount <= maxPerTx, "Purchase: amount prohibited");
        if (maxSupply >0) {require(totalSupply(0) + amount <= maxSupply, "Purchase: Max supply reached");}
        require(msg.value >= amount * mintPrice, "Purchase: Incorrect payment");

        _mint(msg.sender, 0, amount, "");
        emit Purchased(0, msg.sender, amount);
    }

   
    /**
    * @notice returns the metadata uri for a given id
    *
    * @param _id the card id to return metadata for
    */
    function uri(uint256 _id) public view override returns (string memory) {
            require(exists(_id), "URI: nonexistent token");

            return string(super.uri(_id));
    }
}
