// ProductIdentification.sol
pragma solidity ^0.8.0;

contract ProductIdentification {
    mapping(string => bool) public productRegistry;

    event ProductRegistered(string productId);

    function registerProduct(string memory productId) public {
        require(!productRegistry[productId], "Product already registered");
        productRegistry[productId] = true;
        emit ProductRegistered(productId);
    }
}
