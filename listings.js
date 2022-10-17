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
    "body": `{"query":"",
      "filters": "${filter}",
      "page":0,
      "hitsPerPage":1000
    }`,
    "method": "POST",
    "mode": "cors",
    "credentials": "omit"
  }).then(response => {
    return response.json();
  });
}

async function fetchTransfers(filter, facetFilter="") {
  return await fetch("https://js76hmpzh9-dsn.algolia.net/1/indexes/transfers-date-desc/query", {
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
    "body": `{"query":"",
      "facetFilters":["${facetFilter}"],
      "filters": "${filter}",
      "page":0,
      "hitsPerPage":1000
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

async function fetchUserId(username) {
  var username = cleanQuery(username);
  var picSize = cleanQuery("width=96");
  return await fetch("https://rules-t8gf.onrender.com/https://api.rules.art/graphql", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US;q=0.9,en;q=0.8",
      "content-type": "application/json",
    },
    "body": `{ "query": "{ user(slug: ${username}) { id packsBalances {balance pack {displayName description pictureUrl(derivative: ${picSize}) }}} }" }`,
    "method": "POST",
    "mode": "cors"
  }).then(response => {
    return response.json();
  });
}

async function fetchUserNames(ids) {
  var idsString = cleanQuery(ids);
  return await fetch("https://rules-t8gf.onrender.com/https://api.rules.art/graphql", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US;q=0.9,en;q=0.8",
      "content-type": "application/json",
    },
    "body": `{
      "query": "{ usersByIds(ids: ${idsString}) {id username slug} }"
    }`,
    "method": "POST",
    "mode": "cors"
  }).then(response => {
    return response.json();
  });
}

async function fetchRoster(userId) {
  return await fetch("https://js76hmpzh9-dsn.algolia.net/1/indexes/cards-date-desc/query", {
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
    "body": `{"query":"",
      "facetFilters":["ownerUserId:${userId}"],
      "page":0,
      "hitsPerPage":1000
    }`,
    "method": "POST",
    "mode": "cors",
    "credentials": "omit"
  }).then(response => {
    return response.json();
  });
}

async function fetchUserCards(ids) {
  var idsString = cleanQuery(ids);
  return await fetch("https://rules-t8gf.onrender.com/https://api.rules.art/graphql", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US;q=0.9,en;q=0.8",
      "content-type": "application/json",
    },
    "body": `{
      "query": "{ cardsByIds(ids: ${idsString}) {serialNumber cardModel {id}} }"
    }`,
    "method": "POST",
    "mode": "cors"
  }).then(response => {
    return response.json();
  });
}