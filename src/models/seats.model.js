const db = require('../helpers/db.helper')

exports.allSeats = (filter, callback)=>{
  const sql = `SELECT * FROM "seats" WHERE "numberSeat" LIKE $3 ORDER BY "${filter.sortBy}" ${filter.sort} LIMIT $1 OFFSET $2`;
  const value = [filter.limit, filter.offset, `%${filter.search}%`]
  db.query(sql,value, callback)
}

exports.countSeats = (filter, callback) =>{
  const sql = `SELECT COUNT("numberSeat") AS "totalData" FROM "seats" WHERE "numberSeat" LIKE $1`;
  const value = [`%${filter.search}%`]
  db.query(sql, value, callback)
}

exports.singleSeat = (data, callback)=>{
  const sql = 'SELECT * FROM "seats" WHERE "idSeat" = $1';
  const value = [data.idSeat];
  db.query(sql, value, callback) ;
}

exports.createSeat = (data, callback) =>{
  const sql = 'INSERT INTO "seats" ("numberSeat") VALUES ($1) RETURNING*';
  const value = [data.numberSeat];
  db.query(sql, value, callback) ;
}

exports.updateSeat = (data, callback) =>{
  console.log(data.body)
  const timeNow = new Date();
  const sql = 'UPDATE "seats" SET "numberSeat" = COALESCE(NULLIF($2, \'\')::VARCHAR, "numberSeat" ), "updateDate" = $3 WHERE "idSeat" = $1 RETURNING*';
  const value = [data.params.idSeat, data.body.numberSeat, timeNow];
  db.query(sql, value, callback)
}

exports.deleteSeat = (data, callback) =>{
  const sql = 'DELETE FROM "seats" WHERE "idSeat" = $1 RETURNING*';
  const value = [data.idSeat];
  db.query(sql, value, callback) ;
}
