const { ethers } = require("hardhat");

async function main() {
    const attackFactory = await ethers.getContractFactory('AttackForce');
    const attck = await attackFactory.deploy({value: ethers.utils.parseEther('0.000000001')});
    await attck.deployed();
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
})