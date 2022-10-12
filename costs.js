var ethEurRate = 1400;
var giftGasUsage = 10284;
var sellGasUsage = 12708;
var buyGasUsage = 36503;

async function fetchEthPrice() {
  return await fetch("https://api.coinbase.com/v2/prices/ETH-EUR/spot").then(response => {
    return response.json();
  });
};

async function fetchGasPrice() {
  return await fetch("https://alpha-mainnet.starknet.io/feeder_gateway/get_block?blockNumber=pending").then(response => {
    return response.json();
  });
};

async function fetchMaxGasPrice() {
  return await fetch("https://api.rules.art/v1/maximum-gas-price").then(response => {
    return response.json();
  });
};
