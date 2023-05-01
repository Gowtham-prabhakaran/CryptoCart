require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/allpBFcM_UaDVLtVvFRDbCMeBpSD4iXe',
      accounts: ['860c8bccaf7f8ec60115b990d535e435bdcf615b961ccdfdef11a6dc93b3a266'],
    },
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/yKzIM9RVGqWlkS61ylUL40srCwuUYlkE',
      accounts: ['860c8bccaf7f8ec60115b990d535e435bdcf615b961ccdfdef11a6dc93b3a266'],
    }
  },
};
