select "g"."name" as "genre",
      count("fg".*) as "count"
from "actors" as "a"
 join "castMembers" as "cm" using ("actorId")
 join "filmGenre" as "fg" using ("filmId")
 join "genres" as "g" using ("genreId")
 where "a"."firstName" = 'Lisa' AND "a"."lastName" = 'Monroe'
 group by "g"."genreId";


--  actors -> actorId  (actor: firstName & lastName -> actorId)
--  castMembers -> actorId & filmId (actorId -> filmId)
--  filmGenre -> genreId & filmId (filmId -> genreId)
--  genres -> genreId  (genreId -> name)
