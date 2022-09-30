var ethEurRate = 1400;
async function fetchEthPrice() {
  const response = await fetch("https://api.coinbase.com/v2/prices/ETH-EUR/spot").then(response => {
    return response.json();
  }).then(json => {
    ethEurRate = parseInt(json.data.amount);
  })
};

async function fetchContractFee() {
  return await fetch("https://alpha-mainnet.starknet.io/feeder_gateway/estimate_fee?blockNumber=pending", {
  "headers": {
      "accept": "*/*",
      "accept-language": "en-US;q=0.9,en;q=0.8",
      "content-type": "application/json",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site"
    },
    "body": `{"contract_address":"0x50930d64e6984b652bdef862685f9d9942b53a7b18005ba0b742921af825405",
    "entry_point_selector":"0x15d40a3d6ca2ac30f4031e42be28da9b056fef9bb7357ac5e85627ee876e5ad",
    "calldata":["2","2000031840833493536440815036539786941974305919381618969872893526239637868210","949021990203918389843157787496164629863144228991510976554585288817234167820","0","5","2816873442989236847978911749117210040458997899422818276913307686380384078824","1211893987632453364886025619102732733921983897127414081427420854953860914533","5","3","8","2816873442989236847978911749117210040458997899422818276913307686380384078824","5360798057776640883","263750553009985979848907810668544","1","0","5360798057776640883","263750553009985979848907810668544","150000000000000000","10"],
    "version":"0x100000000000000000000000000000000",
    "signature":["99883748371839514428695854759959277281930090444043832967039760293899695348","1628345948849523902872968514266984803292502421384644157100705067822124741290"]}`,
    "method": "POST",
    "mode": "cors",
    "credentials": "omit"
  });
  return response;
  console.log(js);
  return parseInt(response.json().overall_fee, 16)/10**18;
};