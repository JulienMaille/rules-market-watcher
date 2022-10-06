async function fetchOffers(filter) {
  return await fetch("https://js76hmpzh9-dsn.algolia.net/1/indexes/offers-price-asc/query?x-algolia-agent=Algolia%20for%20JavaScript%20(4.13.0)%3B%20Browser", {
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
};

async function fetchTransfers(filter, facetFilter="is_sale:true") {
  return await fetch("https://js76hmpzh9-dsn.algolia.net/1/indexes/transfers-date-desc/query?x-algolia-agent=Algolia%20for%20JavaScript%20(4.13.0)%3B%20Browser", {
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
};

async function fetchUserId(username) {
  return await fetch("https://proxy.cors.sh/https://api.rules.art/graphql", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US;q=0.9,en;q=0.8",
      "content-type": "application/json",
    },
    "body": `{
      "operationName": null,
      "variables": {},
      "query": "{ user(slug: \\"${username}\\") { id }}"
    }`,
    "method": "POST",
    "mode": "cors"
  }).then(response => {
    return response.json();
  });
}