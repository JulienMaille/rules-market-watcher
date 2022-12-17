echo var allUserIds = > "js/users.js"

curl "https://api.rules.art/graphql" ^
  -H "accept: */*" ^
  -H "content-type: application/json" ^
  -H "Connection: 'keep-alive" ^
  -H "DNT: 1" ^
  -H "Origin: https://api.rules.art" ^
  --data-raw "{\"query\":\"{users(slugs:[]){starknetWallet{address}}}\"}" >> "js/users.js"
