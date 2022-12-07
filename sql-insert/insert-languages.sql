INSERT INTO "languages" ("name")
      values ('HTML'), ('CSS'), ('JavaScript')
      RETURNING *;
