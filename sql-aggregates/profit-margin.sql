WITH cte_profit AS(
  select sum("p"."amount") as "profit",
         "f"."title" as "title"
  from "films" as "f"
  join "inventory" as "in" using ("filmId")
  join "rentals" as "r" using ("inventoryId")
  join "payments" as "p" using ("rentalId")
  group by "f"."filmId"
),
cte_cost AS (
  select "f"."replacementCost" * count("in"."filmId") as "cost",
         "f"."title" as "title"
  from "films" as "f"
  join "inventory" as "in" using ("filmId")
  group by "f"."filmId"
)

SELECT "f"."title",
      "f"."description",
      "f"."rating",
      "cp"."profit" - "cc"."cost" as "totalProfit"
  from "cte_profit" as "cp"
  join "cte_cost" as "cc" using ("title")
  join "films" as "f" using ("title")
  ORDER by "totalProfit" DESC
  LIMIT 5;

-- inventory -> count how many filmId => total quantity of each film

-- films (filmId)
-- inventory (filmId & inventoryId)
-- rentals (inventoryId & rentalId)
-- payments (rentalId & amount & customerId)
