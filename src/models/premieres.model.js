const db = require('../helpers/db.helper')

exports.allPremieres = (filter, callback)=>{
  const sql = `SELECT * FROM "premieres" WHERE "premiereName" LIKE $3 ORDER BY "${filter.sortBy}" ${filter.sort} LIMIT $1 OFFSET $2`;
  const value = [filter.limit, filter.offset, `%${filter.search}%`]
  db.query(sql,value, callback)
}

exports.countPremieres = (filter, callback) =>{
  const sql = `SELECT COUNT("premiereName") AS "totalData" FROM "premieres" WHERE "premiereName" LIKE $1`;
  const value = [`%${filter.search}%`]
  db.query(sql, value, callback)
}

exports.singlePremiere = (data, callback)=>{
  console.log(data.idPremiere)
  const sql = 'SELECT * FROM "premieres" WHERE "idPremiere" = $1';
  const value = [data.idPremiere];
  db.query(sql, value, callback) ;
}

exports.createPremiere = (data, callback) =>{
  const sql = 'INSERT INTO "premieres" ("premiereName", "imagePremiere") VALUES ($1, $2) RETURNING*';
  const value = [data.premiereName, data.imagePremiere];
  db.query(sql, value, callback) ;
}

exports.updatePremiere = (data, callback) =>{
  const timeNow = new Date();
  const sql = 'UPDATE "premieres" SET "premiereName" = COALESCE(NULLIF($2, \'\')::VARCHAR, "premiereName" ), "imagePremiere" = COALESCE(NULLIF($3, \'\')::VARCHAR, "imagePremiere" ),  "updateDate" = $4 WHERE "idPremiere" = $1 RETURNING*';
  const value = [data.params.idPremiere, data.body.premiereName, data.body.imagePremiere, timeNow];
  db.query(sql, value, callback)
}

exports.deletePremiere = (data, callback) =>{
  const sql = 'DELETE FROM "premieres" WHERE "idPremiere" = $1 RETURNING*';
  const value = [data.idPremiere];
  db.query(sql, value, callback) ;
}
