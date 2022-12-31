echo var allCardModels = > "js/cards.js"

curl "https://api.rules.art/graphql" ^
  -H "accept: */*" ^
  -H "content-type: application/json" ^
  -H "origin: null" ^
  --data-raw "{ \"query\": \" { ^
    allCardModels { ^
      id ^
      slug ^
      artist { displayName slug } ^
      season ^
      scarcity { name } ^
      pictureUrl ^
    } ^
  } \" }" >> "js/cards.js"

echo var topTier = ["le-reglement", "caballero", "jeanjass", "deen-burbigo", "zuukou-mayzie", "winnterzuko", "eden-dillinger", "zinee", "youv-dee", "vladimir-cauchemar", "bigflo"]; >> "js/cards.js"