const db = require('../helpers/db.helper')

// exports.allGenres = (callback)=>{
//   const sql = 'SELECT * FROM "genres"';
//   db.query(sql, callback);
// }
exports.allGenres = (filter, callback)=>{
  const sql = `SELECT * FROM "genres" WHERE "genreName" LIKE $3 ORDER BY "${filter.sortBy}" ${filter.sort} LIMIT $1 OFFSET $2`;
  const value = [filter.limit, filter.offset, `%${filter.search}%`]
  db.query(sql,value, callback)
}

exports.countGenres = (filter, callback) =>{
  const sql = `SELECT COUNT("genreName") AS "totalData" FROM "genres" WHERE "genreName" LIKE $1`;
  const value = [`%${filter.search}%`]
  db.query(sql, value, callback)
}

exports.singleGenre = (data, callback)=>{
  const sql = 'SELECT * FROM "genres" WHERE "idGenre" = $1 RETURNING*';
  const value = [data.idGenre];
  db.query(sql, value, callback) ;
}

exports.createGenre = (data, callback) =>{
  const sql = 'INSERT INTO "genres" ("genreName") VALUES ($1)';
  const value = [data.genreName];
  db.query(sql, value, callback) ;
}

exports.updateGenre = (data, callback) =>{
  const timeNow = new Date();
  // const sql = 'UPDATE "genres" SET "genreName" = $2, "updateDate" = $3, "updateBy" = $1 WHERE "idGenre" = $1'
  const sql = 'UPDATE "genres" SET "genreName" = COALESCE(NULLIF($2, \'\')::VARCHAR, "genreName" ), "updateDate" = $3 WHERE "idGenre" = $1 RETURNING*';
  const value = [data.params.idGenre, data.body.genreName, timeNow];
  db.query(sql, value, callback)
}

exports.deleteGenre = (data, callback) =>{
  const sql = 'DELETE FROM "genres" WHERE "idGenre" = $1 RETURNING*';
  const value = [data.idGenre];
  db.query(sql, value, callback) ;
}
