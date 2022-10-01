async function fetchEthPrice() {
  return await fetch("https://api.coinbase.com/v2/prices/ETH-EUR/spot").then(response => {
    return response.json();
  });
};

async function fetchContractGiftingFee() {
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
    "calldata":["1","2000031840833493536440815036539786941974305919381618969872893526239637868210",
      "730327702935662484951878015260342994925824754530470619774470754812327453764","0","8","8",
      "2277802928010336623191910023386536307813376284777533236402445017574182900741",
      "1658174508219360922237481747078004012752963661731002166998323232047434917121",
      "21167561166113709653962090351", "45838324932415289422458381450346496","1","0","1","0","11"],
    "version":"0x100000000000000000000000000000000",
    "signature":["640398736397574976213236397041857234454759463438144240912583448179824017547",
      "2620693834791730664836136802575589559860839142135458871387170359813876185954"]}`,
  "method": "POST",
  "mode": "cors",
  "credentials": "omit"
}).then(response => {
    return response.json();
  });
};

async function fetchContractSellingFee() {
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
    "calldata":["2","2000031840833493536440815036539786941974305919381618969872893526239637868210",
      "949021990203918389843157787496164629863144228991510976554585288817234167820","0","5",
      "2816873442989236847978911749117210040458997899422818276913307686380384078824",
      "1211893987632453364886025619102732733921983897127414081427420854953860914533","5","3","8",
      "2816873442989236847978911749117210040458997899422818276913307686380384078824","5360798057776640883",
      "263750553009985979848907810668544","1","0","5360798057776640883","263750553009985979848907810668544",
      "150000000000000000","10"],
    "version":"0x100000000000000000000000000000000",
    "signature":["99883748371839514428695854759959277281930090444043832967039760293899695348",
      "1628345948849523902872968514266984803292502421384644157100705067822124741290"]}`,
  "method": "POST",
  "mode": "cors",
  "credentials": "omit"
  }).then(response => {
    return response.json();
  });
};

async function fetchContractBuyingFee() {
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
    "calldata":["2","2087021424722619777119509474943472645767659996348769578120564519014510906823",
      "644460155311288717647126580909524019901998323292235135474624495746789914243","0","3",
      "2816873442989236847978911749117210040458997899422818276913307686380384078824",
      "54146221035638464020387911441288215523641797955769402422235526349137461190","3","2","5",
      "2816873442989236847978911749117210040458997899422818276913307686380384078824",
      "8300000000000000","0","1181508973","4705598256209701802693355842306048","11"],
    "version":"0x100000000000000000000000000000000",
    "signature":["798597961529561757828527849867615809282881343844228587172279855522528643933",
      "2631899299640683821907068808029667403034235178882323147624788376811817082620"]}`,
  "method": "POST",
  "mode": "cors",
  "credentials": "omit"
}).then(response => {
    return response.json();
  });
};