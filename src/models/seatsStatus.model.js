const db = require('../helpers/db.helper')

exports.allSeatsStatus = (callback)=>{
  const sql = 'SELECT * FROM "seatsStatus"';
  db.query(sql, callback);
}

exports.singleSeatStatus = (data, callback)=>{
  const sql = 'SELECT * FROM "seatsStatus" WHERE "idSeatStatus" = $1';
  const value = [data.idSeatStatus];
  db.query(sql, value, callback) ;
}

exports.createSeatStatus = (data, callback) =>{
  const sql = 'INSERT INTO "seatsStatus" ("statusSeat") VALUES ($1) RETURNING*';
  const value = [data.statusSeat];
  db.query(sql, value, callback) ;
}

exports.updateSeatStatus = (data, callback) =>{
  console.log(data.body)
  const timeNow = new Date();
  const sql = 'UPDATE "seatsStatus" SET "statusSeat" = COALESCE(NULLIF($2, \'\')::VARCHAR, "statusSeat" ),  "updateDate" = $3 WHERE "idSeatStatus" = $1 RETURNING*';
  const value = [data.params.idSeatStatus, data.body.statusSeat, timeNow];
  db.query(sql, value, callback)
}

exports.deleteSeatStatus = (data, callback) =>{
  const sql = 'DELETE FROM "seatsStatus" WHERE "idSeatStatus" = $1 RETURNING*';
  const value = [data.idSeatStatus];
  db.query(sql, value, callback) ;
}
