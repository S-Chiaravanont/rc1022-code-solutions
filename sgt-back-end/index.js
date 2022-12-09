const express = require('express');
const pg = require('pg');

const app = express();
app.use(express.json());

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res, next) => {
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score"
      from "grades"
      order by "gradeId";
  `;
  db.query(sql)
    .then(result => {
      const grade = result.rows;
      res.json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades/', (req, res, next) => {
  const { name, course, score } = req.body;
  if (!name || !course || !score) {
    res.status(400).json({
      error: 'Incomplete, missing one or more fields'
    });
    return;
  } else if (Number(score) > 100 || Number(score) < 0) {
    res.status(400).json({
      error: '"Score" must be a positive integer within 0 & 100'
    });
    return;
  }
  const sql = `
    insert into "grades" ("name", "course", "score")
           values ($1, $2, $3)
        returning *;
  `;
  const params = [name, course, score];
  db.query(sql, params)
    .then(result => {
      res.status(201).json(result.rows[0]);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = req.params.gradeId;
  const { name, course, score } = req.body;
  if (!name || !course || !score) {
    res.status(400).json({
      error: 'Incomplete, missing one or more fields'
    });
    return;
  } else if (!Number.isInteger(Number(gradeId)) || Number(gradeId) <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  } else if (Number(score) > 100 || Number(score) < 0) {
    res.status(400).json({
      error: '"Score" must be a positive integer within 0 & 100'
    });
    return;
  }
  const sql = `
    update "grades"
       set "name" = $1,
           "course" = $2,
           "score" = $3
      where "gradeId" = $4
    returning *;
  `;
  const params = [name, course, score, gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = req.params.gradeId;
  if (!Number.isInteger(Number(gradeId)) || Number(gradeId) <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  const sql = `
    delete from "grades"
          where "gradeId" = $1;
  `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const deleteRow = result.rowCount;
      if (deleteRow < 1) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.status(204).json({
          success: `"gradeId" ${gradeId} has been removed`
        });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});

// Sample commands
// GET:
// http -v get :3000/api/grades
// POST:
// http -v post :3000/api/grades name='Cody Miller' course='Ruby' score=99
// PUT:
// http -v put :3000/api/grades/1 name='Simon Peyton Jones' course='Haskell' score=90
// DELETE:
// http -v delete :3000/api/grades/5
