const { waffle } = require("hardhat");

async function main() {
    let password = await waffle.provider.getStorageAt("0x05043e114a7924fB06EA877AE4873255552CC465", 5);
    console.log(password);
    // console.log(`password = ${password} "${Buffer.from(password.slice(2), `hex`)}"`)
    var key = '0x' + password.slice(2, 34);
    console.log(key);
    // console.log(web3.toAscii(password));
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.log(error);
    process.exit(1);
})