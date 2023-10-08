// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts@4.5.0/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts@4.5.0/access/Ownable.sol";

contract DynamicToken is ERC721, Ownable {
    constructor() ERC721("DynamicToken", "DTC") {}

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://QmaQ2KbMPQVkrkXnymhPTxaw5hkxotrr2q6DpHVGCzS12Z";
    }

    function safeMint(address to, uint256 tokenId) public onlyOwner {
        _safeMint(to, tokenId);
    }
}
