SELECT "releaseYear",
      "genres"."name" as "genre"
      from "filmGenre"
        JOIN "films" using ("filmId")
        JOIN "genres" using ("genreId")
      WHERE "films"."title" = 'Boogie Amelie';
