async function fetchOffers(filter) {
  return await fetch("https://js76hmpzh9-dsn.algolia.net/1/indexes/offers-price-asc/query", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US;q=0.9,en;q=0.8",
      "content-type": "application/x-www-form-urlencoded",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site",
      "x-algolia-api-key": "c7d162df9bb45f258af878219300d8c5",
      "x-algolia-application-id": "JS76HMPZH9"
    },
    "body": `{"query": "",
      "filters": "${filter}",
      "page": 0,
      "hitsPerPage": 1000
    }`,
    "method": "POST",
    "mode": "cors",
    "credentials": "omit"
  }).then(response => {
    return response.json();
  });
}

async function fetchTransfers(filter, facetFilter="") {
  return await fetch("https://js76hmpzh9-dsn.algolia.net/1/indexes/transfers-tx-index-desc/query", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US;q=0.9,en;q=0.8",
      "content-type": "application/x-www-form-urlencoded",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site",
      "x-algolia-api-key": "c7d162df9bb45f258af878219300d8c5",
      "x-algolia-application-id": "JS76HMPZH9"
    },
    "body": `{"query": "",
      "facetFilters": ["${facetFilter}"],
      "filters": "${filter}",
      "page": 0,
      "hitsPerPage": 1000
    }`,
    "method": "POST",
    "mode": "cors",
    "credentials": "omit"
  }).then(response => {
    return response.json();
  });
}

async function fetchRoster(address) {
  return await fetch("https://js76hmpzh9-dsn.algolia.net/1/indexes/cards-tx-index-desc/query", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US;q=0.9,en;q=0.8",
      "content-type": "application/x-www-form-urlencoded",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site",
      "x-algolia-api-key": "c7d162df9bb45f258af878219300d8c5",
      "x-algolia-application-id": "JS76HMPZH9"
    },
    "body": `{"query": "",
      "facetFilters": ["ownerStarknetAddress:${address}"],
      "page": 0,
      "hitsPerPage": 1000
    }`,
    "method": "POST",
    "mode": "cors",
    "credentials": "omit"
  }).then(response => {
    return response.json();
  });
}

async function fetchHallOfFame(hits=10) {
  return await fetch("https://js76hmpzh9-dsn.algolia.net/1/indexes/users-c-score-desc/query", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US;q=0.9,en;q=0.8",
      "content-type": "application/x-www-form-urlencoded",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site",
      "x-algolia-api-key": "c7d162df9bb45f258af878219300d8c5",
      "x-algolia-application-id": "JS76HMPZH9"
    },
    "body": `{"query": "",
      "page": 0,
      "hitsPerPage": ${hits}
    }`,
    "method": "POST",
    "mode": "cors",
    "credentials": "omit"
  }).then(response => {
    return response.json();
  });
}

function cleanQuery(q) {
  return JSON.stringify(q).replace(/\"/g, '\\\"');
}

async function fetchUserId(userSlug) {
  var cleanSlug = cleanQuery(userSlug);
  var picSize = cleanQuery("width=96");
  return await fetch("https://jeany.alwaysdata.net", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US;q=0.9,en;q=0.8",
      "content-type": "application/json",
      "x-proxy-url": "https://api.rules.art/graphql",
    },
    "body": `{
      "query": "{ user(slug: ${cleanSlug}) { id createdAt starknetWallet {address} \
                  profile {id pictureUrl(derivative: ${picSize}) twitterUsername instagramUsername \
                  discordMember {username discriminator} twitterUsername isDiscordVisible} \
                  packsBalances {balance pack {slug displayName pictureUrl(derivative: ${picSize}) }}} }"
    }`,
    "method": "POST",
    "mode": "cors"
  }).then(response => {
    return response.json();
  });
}

async function fetchUserNames(addresses) {
  var addressesString = cleanQuery(addresses);
  return await fetch("https://jeany.alwaysdata.net", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US;q=0.9,en;q=0.8",
      "content-type": "application/json",
      "x-proxy-url": "https://api.rules.art/graphql",
    },
    "body": `{
      "query": "{ usersByStarknetAddresses(starknetAddresses: ${addressesString}) {starknetWallet {address} username slug} }"
    }`,
    "method": "POST",
    "mode": "cors"
  }).then(response => {
    return response.json();
  });
}

async function fetchUserCards(ids) {
  var idsString = cleanQuery(ids);
  return await fetch("https://jeany.alwaysdata.net", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US;q=0.9,en;q=0.8",
      "content-type": "application/json",
      "x-proxy-url": "https://api.rules.art/graphql",
    },
    "body": `{
      "query": "{ cardsByIds(ids: ${idsString}) {serialNumber cardModel {id slug}} }"
    }`,
    "method": "POST",
    "mode": "cors"
  }).then(response => {
    return response.json();
  });
}

async function fetchAllCardModels() {
  return await fetch("https://jeany.alwaysdata.net", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US;q=0.9,en;q=0.8",
      "content-type": "application/json",
      "x-proxy-url": "https://api.rules.art/graphql",
    },
    "body": `{
      "query": "{ allCardModels {id slug artist {displayName slug} season scarcity {name} pictureUrl} }"
    }`,
    "method": "POST",
    "mode": "cors"
  }).then(response => {
    return response.json();
  });
}

async function fetchClassicPacks() {
  var picSize = cleanQuery("width=48");
  return await fetch("https://jeany.alwaysdata.net", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US;q=0.9,en;q=0.8",
      "content-type": "application/json",
      "x-proxy-url": "https://api.rules.art/graphql",
    },
    "body": `{
      "query": "{ allClassicPacks {nodes {slug displayName releaseDate pictureUrl(derivative: ${picSize}) \
                  availableQuantity supply maxSupply maxBuyableSupply cardsPerPack cardModelsCount \
                  cardModels {cardModel {slug name pictureUrl(derivative: ${picSize})} quantity}}} }"
    }`,
    "method": "POST",
    "mode": "cors"
  }).then(response => {
    return response.json();
  });
}

async function fetchLastStarterPack() {
  var picSize = cleanQuery("width=48");
  return await fetch("https://jeany.alwaysdata.net", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US;q=0.9,en;q=0.8",
      "content-type": "application/json",
      "x-proxy-url": "https://api.rules.art/graphql",
    },
    "body": `{
      "query": "{ lastStarterPack {slug displayName releaseDate pictureUrl(derivative: ${picSize}) \
                  availableQuantity supply maxSupply maxBuyableSupply cardsPerPack cardModelsCount \
                  cardModels {cardModel {slug name pictureUrl(derivative: ${picSize})} quantity}} }"
    }`,
    "method": "POST",
    "mode": "cors"
  }).then(response => {
    return response.json();
  });
}

function sortByPrice(a, b) {
  return a.price < b.price ? -1 : 1;
}
function sortByDate(a, b) {
  return a.date > b.date ? -1 : 1;
}
function sortBySerial(a, b) {
  return a.serialNumber < b.serialNumber ? -1 : 1;
}
function sortByCardPrice(a, b) {
  return a.cardInfo.artist.displayName == b.cardInfo.artist.displayName
   ? (a.price < b.price ? -1 : 1)
   : a.cardInfo.artist.displayName.toLowerCase() < b.cardInfo.artist.displayName.toLowerCase() ? -1 : 1;
}
function sortByCardSerial(a, b) {
  return a.cardInfo.artist.displayName == b.cardInfo.artist.displayName
    ? (a.serialNumber < b.serialNumber ? -1 : 1)
    : a.cardInfo.artist.displayName.toLowerCase() < b.cardInfo.artist.displayName.toLowerCase() ? -1 : 1;
}

async function initDarkMode() {
  await ui("theme", "#0061a6");
  if( window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ) {
    ui('mode', 'dark');
  } else if( (new Date()).getHours() < 8 || (new Date()).getHours() > 20 ) {
    ui('mode', 'dark');
  }
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const newColorScheme = event.matches ? "dark" : "light";
    ui('mode', newColorScheme);
  });
}

function ready(callback){
  // in case the document is already rendered
  if( document.readyState!='loading' ) callback();
  // modern browsers
  else if( document.addEventListener ) document.addEventListener('DOMContentLoaded', callback);
  // IE <= 8
  else document.attachEvent('onreadystatechange', function() {
    if( document.readyState=='complete' ) callback();
  });
}

function cb(res) {
  console.log(res.value + " visitors");
}