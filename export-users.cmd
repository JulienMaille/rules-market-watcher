echo var allUserIds = > "users.js"

curl "https://api.rules.art/graphql" ^
  -H "accept: */*" ^
  -H "content-type: application/json" ^
  -H "origin: https://www.rules.art" ^
  --data-raw "{ \"query\": \" { ^
    users(slugs: []) { id } ^
  } \" }" >> "users.js"
