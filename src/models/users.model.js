const db = require("../helpers/db.helper")

exports.ambilAllUsers = (callback) =>{
  const sql = 'SELECT * FROM "users"';
  db.query(sql, callback);
}

exports.singleUser = (data, callback) =>{
  const sql = 'SELECT * FROM "users" WHERE "idUser" = $1';
  const value = [data.idUser];
  db.query(sql, value, callback);
}

exports.singleUserByEmail = (email, callback)=>{
  const sql = `SELECT * FROM "users" WHERE "email" = $1`
  const value = [email]
  db.query(sql, value, callback)
}

exports.newUserGuest = (data, callback) =>{
  const sql = 'INSERT INTO "users" ("fullName", "lastName", "email", "password", "phone","picture",  "idGroupUser") VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *';
  const value = [data.fullName, data.lastName, data.email, data.password, data.phone, data.picture, 2];
  db.query(sql, value, callback);
}

exports.deleteUser = (data, callback) =>{
  const sql = 'DELETE FROM "users" WHERE "idUser" = $1 RETURNING *'
  const value = [data.idUser]
  db.query(sql, value, callback)
}

exports.updateUser = (data, callback) =>{
  const timeNow =  new Date();
  const sql = 'UPDATE "users" set "fullName" = COALESCE(NULLIF($2, \'\')::VARCHAR, "fullName" ), "lastName" = COALESCE(NULLIF($3, \'\')::VARCHAR, "lastName" ), "email" = COALESCE(NULLIF($4, \'\')::VARCHAR, "email" ), "password" = COALESCE(NULLIF($5, \'\')::VARCHAR, "password" ), "phone" = COALESCE(NULLIF($6, \'\')::VARCHAR, "phone" ), "picture" = COALESCE(NULLIF($7, \'\')::VARCHAR, "picture" ), "updateDate" = $8 WHERE "idUser" = $1 RETURNING *';
  const value = [data.params.idUser, data.body.fullName, data.body.lastName, data.body.email, data.body.password, data.body.phone, data.body.picture, timeNow ]
  db.query(sql, value, callback)
}
