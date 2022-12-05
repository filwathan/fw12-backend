const db = require('../helpers/db.helper')

exports.allMoviesShowtimes = (callback)=>{
  const sql = 'SELECT * FROM "moviesShowtimes"';
  db.query(sql, callback);
}

exports.singleMoviesShowtimes = (data, callback)=>{
  console.log(data)
  const sql = 'SELECT * FROM "moviesShowtimes" WHERE "idMoviesShowtime" = $1';
  const value = [data.idMoviesShowtime];
  db.query(sql, value, callback) ;
}

exports.createMoviesShowtimes = (data, callback) =>{
  const sql = 'INSERT INTO "moviesShowtimes" ("idMovie", "idShowtime") VALUES ($1, $2) RETURNING*';
  const value = [data.idMovie, data.idShowtime];
  db.query(sql, value, callback) ;
}

exports.updateMoviesShowtimes = (data, callback) =>{
  const timeNow = new Date();
  const sql = 'UPDATE "moviesShowtimes" SET "idMovie" = COALESCE(NULLIF($2, \'\')::INT, "idMovie" ), "idShowtime" = COALESCE(NULLIF($3, \'\')::INT, "idShowtime" ), "updateDate" = $4 WHERE "idMoviesShowtime" = $1 RETURNING*';
  const value = [data.params.idMoviesShowtime, data.body.idMovie, data.body.idShowtime, timeNow];
  db.query(sql, value, callback)
}

exports.deleteMoviesShowtimes = (data, callback) =>{
  const sql = 'DELETE FROM "moviesShowtimes" WHERE "idMoviesShowtime" = $1 RETURNING*';
  const value = [data.idMoviesShowtime];
  db.query(sql, value, callback) ;
}
