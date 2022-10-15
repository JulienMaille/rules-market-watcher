echo var allCardModels = > "cards.js"

curl "https://rules-t8gf.onrender.com/https://api.rules.art/graphql" ^
  -H "accept: */*" ^
  -H "content-type: application/json" ^
  -H "origin: null" ^
  --data-raw "{ \"query\": \" { ^
    allCardModels { ^
      id ^
      slug ^
      artist { displayName, slug } ^
      season ^ ^
      scarcity { name } ^
      pictureUrl ^
    } ^
  } \" }" >> "cards.js"

echo var topTier = ["le-reglement", "caballero", "jeanjass", "deen-burbigo", "zuukou-mayzie", "winnterzuko", "kerchak", "doums"]; >> "cards.js"