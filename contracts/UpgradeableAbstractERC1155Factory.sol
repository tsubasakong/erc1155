// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

// import '@openzeppelin/contracts/access/Ownable.sol';
// import '@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol';
// import '@openzeppelin/contracts/security/Pausable.sol';
// import '@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol';

import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/token/ERC1155/extensions/ERC1155BurnableUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/token/ERC1155/extensions/ERC1155SupplyUpgradeable.sol';

// /contracts-upgradeable

abstract contract UpgradeableAbstractERC1155Factory is PausableUpgradeable, ERC1155SupplyUpgradeable, ERC1155BurnableUpgradeable, OwnableUpgradeable {

    string name_;
    string symbol_;   

    function pause() external onlyOwner {
        _pause();
    }

    function unpause() external onlyOwner {
        _unpause();
    }    

    function setURI(string memory baseURI) external onlyOwner {
        _setURI(baseURI);
    }    

    function name() public view returns (string memory) {
        return name_;
    }

    function symbol() public view returns (string memory) {
        return symbol_;
    }          

    function _beforeTokenTransfer(
        address operator,
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) internal virtual override(ERC1155Upgradeable, ERC1155SupplyUpgradeable) {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }  
}