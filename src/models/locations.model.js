const db = require('../helpers/db.helper')

exports.allLocations = (filter, callback)=>{
  const sql = `SELECT * FROM "locations" WHERE "locationName" LIKE $3 ORDER BY "${filter.sortBy}" ${filter.sort} LIMIT $1 OFFSET $2`;
  const value = [filter.limit, filter.offset, `%${filter.search}%`]
  db.query(sql,value, callback)
}

exports.countLocations = (filter, callback) =>{
  const sql = `SELECT COUNT("locationName") AS "totalData" FROM "locations" WHERE "locationName" LIKE $1`;
  const value = [`%${filter.search}%`]
  db.query(sql, value, callback)
}

exports.singleLocation = (data, callback)=>{
  const sql = 'SELECT * FROM "locations" WHERE "idLocation" = $1';
  const value = [data.idLocation];
  db.query(sql, value, callback) ;
}

exports.createLocation = (data, callback) =>{
  const sql = 'INSERT INTO "locations" ("locationName") VALUES ($1) RETURNING*';
  const value = [data.locationName];
  db.query(sql, value, callback) ;
}

exports.updateLocation = (data, callback) =>{
  const timeNow = new Date();
  const sql = 'UPDATE "locations" SET "locationName" = COALESCE(NULLIF($2, \'\')::VARCHAR, "locationName" ), "updateDate" = $3 WHERE "idLocation" = $1 RETURNING*';
  const value = [data.params.idLocation, data.body.locationName, timeNow];
  db.query(sql, value, callback)
}

exports.deleteLocation = (data, callback) =>{
  const sql = 'DELETE FROM "locations" WHERE "idLocation" = $1 RETURNING*';
  const value = [data.idLocation];
  db.query(sql, value, callback) ;
}
