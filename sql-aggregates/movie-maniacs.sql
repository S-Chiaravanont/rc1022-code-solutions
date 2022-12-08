select sum("p"."amount") as "total",
       "c"."firstName",
       "c"."lastName"
      from "customers" as "c"
      join "payments" as "p" using ("customerId")
      group by "c"."customerId"
      order by "total" DESC;




-- customers -> (firstName & lastName -> customerId)
-- payments -> (customerId -> amount)
