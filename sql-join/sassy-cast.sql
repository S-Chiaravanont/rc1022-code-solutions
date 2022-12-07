SELECT "firstName",
       "lastName"
    from "castMembers"
       JOIN "films" using ("filmId")
       JOIN "actors" using ("actorId")
    where "films"."title" = 'Jersey Sassy';
