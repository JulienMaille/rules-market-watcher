var giftGasUsage = 5416;
var sellGasUsage = 9064;
var buyGasUsage = 15714;

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
  return await fetch("https://api.rules.art/v1/maximum-gas-price?for=packs-delivery").then(response => {
    return response.json();
  });
};

function iconCost(feeEUR) {
  if( feeEUR > 0.9 ) return "🔥";
  else if( feeEUR > 0.6 ) return "🔴";
  else if( feeEUR > 0.3 ) return "🟡";
  else return "🟢";
}