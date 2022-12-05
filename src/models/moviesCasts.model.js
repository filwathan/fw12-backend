const db = require('../helpers/db.helper')

exports.allMoviesCasts = (callback)=>{
  const sql = 'SELECT * FROM "moviesCasts"';
  db.query(sql, callback);
}

exports.singleMoviesCasts = (data, callback)=>{
  console.log(data)
  const sql = 'SELECT * FROM "moviesCasts" WHERE "idMoviesCast" = $1';
  const value = [data.idMoviesCast];
  db.query(sql, value, callback) ;
}

exports.createMoviesCasts = (data, callback) =>{
  const sql = 'INSERT INTO "moviesCasts" ("idMovie", "idCast") VALUES ($1, $2) RETURNING*';
  const value = [data.idMovie, data.idCast];
  db.query(sql, value, callback) ;
}

exports.updateMoviesCasts = (data, callback) =>{
  const timeNow = new Date();
  const sql = 'UPDATE "moviesCasts" SET "idMovie" = COALESCE(NULLIF($2, \'\')::INT, "idMovie" ), "idCast" = COALESCE(NULLIF($3, \'\')::INT, "idCast" ), "updateDate" = $4 WHERE "idMoviesCast" = $1 RETURNING*';
  const value = [data.params.idMoviesCast, data.body.idMovie, data.body.idCast, timeNow];
  db.query(sql, value, callback)
}

exports.deleteMoviesCasts = (data, callback) =>{
  const sql = 'DELETE FROM "moviesCasts" WHERE "idMoviesCast" = $1 RETURNING*';
  const value = [data.idMoviesCast];
  db.query(sql, value, callback) ;
}
