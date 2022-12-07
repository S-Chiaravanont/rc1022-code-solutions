SELECT "a"."line1",
      "c"."name" as "city",
      "a"."district",
      "co"."name" as "countries"
      from "cities" as "c"
        join "addresses" as "a" USING ("cityId")
        join "countries" as "co" USING ("countryId");
