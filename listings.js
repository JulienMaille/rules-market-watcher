async function fetchListings(filter) {
  return await fetch("https://js76hmpzh9-dsn.algolia.net/1/indexes/offers-price-asc/query?x-algolia-agent=Algolia%20for%20JavaScript%20(4.13.0)%3B%20Browser", {
    "headers": {
      "accept": "*/*",
      "content-type": "application/x-www-form-urlencoded",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site",
      "x-algolia-api-key": "c7d162df9bb45f258af878219300d8c5",
      "x-algolia-application-id": "JS76HMPZH9"
    },
    "referrer": "https://rules.art/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": `{"query":"",
      "facetFilters":["available:true"],
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