select "firstName",
       "lastName"
    from "rentals"
      join "inventory" using ("inventoryId")
      join "films" using ("filmId")
      join "customers" using ("customerId")
    where "films"."title" = 'Magic Mallrats';

    -- customers -> customerId
    -- films -> filmId
    -- rentals -> customerId & rentalId & inventoryId
    -- inventory -> inventoryId & filmId
