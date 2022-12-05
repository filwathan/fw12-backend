const db = require('../helpers/db.helper')

exports.allMoviesPremieres = (callback)=>{
  const sql = 'SELECT * FROM "moviesPremieres"';
  db.query(sql, callback);
}

exports.singleMoviesPremieres = (data, callback)=>{
  const sql = 'SELECT * FROM "moviesPremieres" WHERE "idMoviePremiere" = $1';
  const value = [data.idMoviePremiere];
  db.query(sql, value, callback) ;
}

exports.createMoviesPremieres = (data, callback) =>{
  const sql = 'INSERT INTO "moviesPremieres" ("idMovie", "idPremiere") VALUES ($1, $2) RETURNING*';
  const value = [data.idMovie, data.idPremiere];
  db.query(sql, value, callback) ;
}

exports.updateMoviesPremieres = (data, callback) =>{
  const timeNow = new Date();
  const sql = 'UPDATE "moviesPremieres" SET "idMovie" = COALESCE(NULLIF($2, \'\')::INT, "idMovie" ), "idPremiere" = COALESCE(NULLIF($3, \'\')::INT, "idPremiere" ), "updateDate" = $4 WHERE "idMoviePremiere" = $1 RETURNING*';
  const value = [data.params.idMoviePremiere, data.body.idMovie, data.body.idPremiere, timeNow];
  db.query(sql, value, callback)
}

exports.deleteMoviesPremieres = (data, callback) =>{
  const sql = 'DELETE FROM "moviesPremieres" WHERE "idMoviePremiere" = $1 RETURNING*';
  const value = [data.idMoviePremiere];
  db.query(sql, value, callback) ;
}
