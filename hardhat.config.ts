/**
 * @type import('hardhat/config').HardhatUserConfig
 */

import "@nomicfoundation/hardhat-toolbox";
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.20",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
