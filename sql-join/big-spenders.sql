select "p"."amount",
      "c"."firstName",
      "c"."lastName"
  from "payments" as "p"
  join "customers" as "c" USING ("customerId")
  ORDER by "amount" DESC
  LIMIT 10;
