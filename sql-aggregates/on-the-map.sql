select count("c".*) as "cityCounts",
        "co"."name" as "country"
  from "cities" as "c"
  join "countries" as "co" using ("countryId")
  group by "co"."countryId";
