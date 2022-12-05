const db = require('../helpers/db.helper')

exports.allPremieresLocations = (callback)=>{
  const sql = 'SELECT * FROM "premieresLocations"';
  db.query(sql, callback);
}

exports.singlePremieresLocations = (data, callback)=>{
  console.log(data.idPremiereLocation)
  const sql = 'SELECT * FROM "premieresLocations" WHERE "idPremiereLocation" = $1';
  const value = [data.idPremiereLocation];
  db.query(sql, value, callback) ;
}

exports.createPremieresLocations = (data, callback) =>{
  const sql = 'INSERT INTO "premieresLocations" ("idPremiere", "idLocation", "locationAdress") VALUES ($1, $2, $3) RETURNING*';
  const value = [data.idPremiere, data.idLocation, data.locationAdress];
  db.query(sql, value, callback) ;
}

exports.updatePremieresLocations = (data, callback) =>{
  const timeNow = new Date();
  const sql = 'UPDATE "premieresLocations" SET "idPremiere" = COALESCE(NULLIF($2, \'\')::INT, "idPremiere" ), "idLocation" = COALESCE(NULLIF($3, \'\')::INT, "idLocation" ), "locationAdress"= COALESCE(NULLIF($4, \'\')::VARCHAR, "locationAdress" ), "updateDate" = $5 WHERE "idPremiereLocation" = $1 RETURNING*';
  const value = [data.params.idPremiereLocation, data.body.idPremiere, data.body.idLocation, data.body.locationAdress, timeNow];
  db.query(sql, value, callback)
}

exports.deletePremieresLocations = (data, callback) =>{
  const sql = 'DELETE FROM "premieresLocations" WHERE "idPremiereLocation" = $1 RETURNING*';
  const value = [data.idPremiereLocation];
  db.query(sql, value, callback) ;
}
