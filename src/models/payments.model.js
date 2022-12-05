const db = require('../helpers/db.helper')

exports.allPayments = (filter, callback)=>{
  const sql = `SELECT * FROM "payments" WHERE "paymentName" LIKE $3 ORDER BY "${filter.sortBy}" ${filter.sort} LIMIT $1 OFFSET $2`;
  const value = [filter.limit, filter.offset, `%${filter.search}%`]
  db.query(sql,value, callback)
}

exports.countPayments = (filter, callback) =>{
  const sql = `SELECT COUNT("paymentName") AS "totalData" FROM "payments" WHERE "paymentName" LIKE $1`;
  const value = [`%${filter.search}%`]
  db.query(sql, value, callback)
}

exports.singlePayment = (data, callback)=>{
  const sql = 'SELECT * FROM "payments" WHERE "idPayment" = $1';
  const value = [data.idPayment];
  db.query(sql, value, callback) ;
}

exports.createPayment = (data, callback) =>{
  const sql = 'INSERT INTO "payments" ("paymentName", "paymentImage") VALUES ($1, $2) RETURNING*';
  const value = [data.paymentName, data.paymentImage];
  db.query(sql, value, callback) ;
}

exports.updatePayment = (data, callback) =>{
  console.log(data.body)
  const timeNow = new Date();
  const sql = 'UPDATE "payments" SET "paymentName" = COALESCE(NULLIF($2, \'\')::VARCHAR, "paymentName" ), "paymentImage" = COALESCE(NULLIF($3, \'\')::VARCHAR, "paymentImage" ), "updateDate" = $4 WHERE "idPayment" = $1 RETURNING*';
  const value = [data.params.idPayment, data.body.paymentName, data.body.paymentImage, timeNow];
  db.query(sql, value, callback)
}

exports.deletePayment = (data, callback) =>{
  const sql = 'DELETE FROM "payments" WHERE "idPayment" = $1 RETURNING*';
  const value = [data.idPayment];
  db.query(sql, value, callback) ;
}
