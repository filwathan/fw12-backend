const db = require('../helpers/db.helper')

exports.allMoviesGenres = (callback)=>{
  const sql = 'SELECT * FROM "moviesGenres"';
  db.query(sql, callback);
}

exports.singleMoviesGenres = (data, callback)=>{
  const sql = 'SELECT * FROM "moviesGenres" WHERE "idMoviesGenre" = $1';
  const value = [data.idMoviesGenre];
  db.query(sql, value, callback) ;
}

exports.createMoviesGenres = (data, callback) =>{
  const sql = 'INSERT INTO "moviesGenres" ("idMovie", "idGenre") VALUES ($1, $2) RETURNING*';
  const value = [data.idMovie, data.idGenre];
  db.query(sql, value, callback) ;
}

exports.updateMoviesGenres = (data, callback) =>{
  const timeNow = new Date();
  const sql = 'UPDATE "moviesGenres" SET "idMovie" = COALESCE(NULLIF($2, \'\')::INT, "idMovie" ), "idGenre" = COALESCE(NULLIF($3, \'\')::INT, "idGenre" ), "updateDate" = $4 WHERE "idMoviesGenre" = $1 RETURNING*';
  const value = [data.params.idMoviesGenre, data.body.idMovie, data.body.idGenre, timeNow];
  db.query(sql, value, callback)
}

exports.deleteMoviesGenres = (data, callback) =>{
  const sql = 'DELETE FROM "moviesGenres" WHERE "idMoviesGenre" = $1 RETURNING*';
  const value = [data.idMoviesGenre];
  db.query(sql, value, callback) ;
}
