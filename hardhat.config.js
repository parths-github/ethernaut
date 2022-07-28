require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config({ path: ".env"});

const RINKEBY_URL = process.env.ALCHEMY_RINKEBY;



/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "rinkeby",

  solidity: "0.8.4",
  networks: {
    rinkeby: {
      // forking: {
        url: RINKEBY_URL,
      // },
      accounts: [process.env.PRIVATEKEY],

    }
  },
  
};
