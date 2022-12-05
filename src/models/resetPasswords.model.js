const db = require('../helpers/db.helper')

exports.allResetPasswords = (filter, callback)=>{
  const sql = `SELECT * FROM "resetPasswords" WHERE "email" LIKE $3 ORDER BY "${filter.sortBy}" ${filter.sort} LIMIT $1 OFFSET $2`;
  const value = [filter.limit, filter.offset, `%${filter.search}%`]
  db.query(sql,value, callback)
}

exports.countResetPasswords = (filter, callback) =>{
  const sql = `SELECT COUNT("email") AS "totalData" FROM "resetPasswords" WHERE "email" LIKE $1`;
  const value = [`%${filter.search}%`]
  db.query(sql, value, callback)
}

exports.singleResetPassword = (data, callback)=>{
  const sql = 'SELECT * FROM "resetPasswords" WHERE "idResetPassword" = $1';
  const value = [data.idResetPassword];
  db.query(sql, value, callback) ;
}

exports.singleResetPasswordByEmailAndCode = (data, callback)=>{
  const sql = 'SELECT * FROM "resetPasswords" WHERE "email" = $1 AND "code" = $2';
  const value = [data.email, data.code];
  db.query(sql, value, callback) ;
}

exports.createResetPassword = (data, callback) =>{
  const sql = 'INSERT INTO "resetPasswords" ("email", "idUser", "code") VALUES ($1, $2, $3) RETURNING*';
  const value = [data.email, data.idUser, data.code];
  db.query(sql, value, callback) ;
}

exports.updateResetPassword = (data, callback) =>{
  console.log(data.body)
  const timeNow = new Date();
  const sql = 'UPDATE "resetPasswords" SET "email" = COALESCE(NULLIF($2, \'\')::VARCHAR, "email" ), "idUser" = COALESCE(NULLIF($3, \'\')::INT, "idUser" ), "code" = COALESCE(NULLIF($4, \'\')::INT, "code" ),"updateDate" = $5 WHERE "idResetPassword" = $1 RETURNING*';
  const value = [data.params.idResetPassword, data.body.email, data.body.idUser, data.body.code, timeNow];
  db.query(sql, value, callback)
}

exports.deleteResetPassword = (data, callback) =>{
  const sql = 'DELETE FROM "resetPasswords" WHERE "idResetPassword" = $1 RETURNING*';
  const value = [data.idResetPassword];
  db.query(sql, value, callback) ;
}
