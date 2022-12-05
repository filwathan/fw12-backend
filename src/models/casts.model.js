const db = require('../helpers/db.helper')

exports.allCasts = (filter, callback)=>{
  const sql = `SELECT * FROM "casts" WHERE "castName" LIKE $3 ORDER BY "${filter.sortBy}" ${filter.sort} LIMIT $1 OFFSET $2`;
  const value = [filter.limit, filter.offset, `%${filter.search}%`]
  db.query(sql,value, callback)
}

exports.countCasts = (filter, callback) =>{
  const sql = `SELECT COUNT("castName") AS "totalData" FROM "casts" WHERE "castName" LIKE $1`;
  const value = [`%${filter.search}%`]
  db.query(sql, value, callback)
}

exports.singleCast = (data, callback)=>{
  const sql = 'SELECT * FROM "casts" WHERE "idCast" = $1';
  const value = [data.idCast];
  db.query(sql, value, callback) ;
}

exports.createCast = (data, callback) =>{
  const sql = 'INSERT INTO "casts" ("castName") VALUES ($1) RETURNING*';
  const value = [data.castName];
  db.query(sql, value, callback) ;
}

exports.updateCast = (data, callback) =>{
  const timeNow = new Date();
  // const sql = 'UPDATE "casts" SET "castName" = $2, "updateDate" = $3 WHERE "idCast" = $1 RETURNING*';
  const sql = 'UPDATE "casts" SET "castName" = COALESCE(NULLIF($2, \'\')::VARCHAR, "castName" ), "updateDate" = $3 WHERE "idCast" = $1 RETURNING*';
  const value = [data.params.idCast, data.body.castName, timeNow];
  db.query(sql, value, callback)
}

exports.deleteCast = (data, callback) =>{
  const sql = 'DELETE FROM "casts" WHERE "idCast" = $1 RETURNING*';
  const value = [data.idCast];
  db.query(sql, value, callback) ;
}
