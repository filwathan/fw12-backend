const db = require('../helpers/db.helper')

exports.allShowtimes = (callback)=>{
  const sql = 'SELECT * FROM "showtimes"';
  db.query(sql, callback);
}

exports.singleShowtime = (data, callback)=>{
  const sql = 'SELECT * FROM "showtimes" WHERE "idShowtime" = $1';
  const value = [data.idShowtime];
  db.query(sql, value, callback) ;
}

exports.createShowtime = (data, callback) =>{
  console.log(data.showtimeName)
  const sql = 'INSERT INTO "showtimes" ("showtimeName") VALUES ($1) RETURNING*';
  const value = [data.showtimeName];
  db.query(sql, value, callback) ;
}

exports.updateShowtime = (data, callback) =>{
  const timeNow = new Date();
  const sql = 'UPDATE "showtimes" SET "showtimeName" = COALESCE(NULLIF($2, \'\')::TIME, "showtimeName" ), "updateDate" = $3 WHERE "idShowtime" = $1 RETURNING*';
  const value = [data.params.idShowtime, data.body.showtimeName, timeNow];
  db.query(sql, value, callback)
}

exports.deleteShowtime = (data, callback) =>{
  const sql = 'DELETE FROM "showtimes" WHERE "idShowtime" = $1 RETURNING*';
  const value = [data.idShowtime];
  db.query(sql, value, callback) ;
}
