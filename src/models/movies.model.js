const db = require('../helpers/db.helper')

exports.allMovies = (filter, callback)=>{
  const sql = `SELECT * FROM "movies" WHERE "titleMovie" LIKE $3 ORDER BY "${filter.sortBy}" ${filter.sort} LIMIT $1 OFFSET $2`;
  const value = [filter.limit, filter.offset, `%${filter.search}%`]
  db.query(sql,value, callback)
}

exports.countMovies = (filter, callback) =>{
  const sql = `SELECT COUNT("titleMovie") AS "totalData" FROM "movies" WHERE "titleMovie" LIKE $1`;
  const value = [`%${filter.search}%`]
  db.query(sql, value, callback)
}

exports.singleMovie = (data, callback)=>{
  const sql = 'SELECT * FROM "movies" WHERE "idMovie" = $1';
  const value = [data.idMovie];
  db.query(sql, value, callback) ;
}

exports.createMovie = (data, callback) =>{
  console.log("masuk ke model")
  const sql = 'INSERT INTO "movies" ("titleMovie", "releaseDate", "direcredBy", "duration", "synopsis", "price", "dateStart", "dateEnd")  VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING*';
  const value = [data.titleMovie, data.releaseDate, data.direcredBy, data.duration, data.synopsis, data.price, data.dateStart, data.dateEnd];
  db.query(sql, value, callback) ;
}

exports.updateMovie = (data, callback) =>{
  const timeNow = new Date();
  const sql = 'UPDATE "movies" SET "titleMovie" = COALESCE(NULLIF($2, \'\')::VARCHAR, "titleMovie" ), "releaseDate" = COALESCE(NULLIF($3, \'\')::TIMESTAMP, "releaseDate" ), "direcredBy" = COALESCE(NULLIF($4, \'\')::VARCHAR, "direcredBy" ), "duration" = COALESCE(NULLIF($5, \'\')::TIME, "duration" ), "synopsis" = COALESCE(NULLIF($6, \'\')::TEXT, "synopsis" ), "price" = COALESCE(NULLIF($7, \'\')::INT, "locatipriceonName" ), "dateStart" = COALESCE(NULLIF($8, \'\')::TIMESTAMP, "dateStart" ), "dateEnd" = COALESCE(NULLIF($9, \'\')::TIMESTAMP, "dateEnd" ), "updateDate" = $10  WHERE "idMovie" = $1 RETURNING*';
  const value = [data.params.idMovie, data.body.movieName, data.body.releaseDate, data.body.direcredBy, data.body.duration, data.body.synopsis, data.body.price, data.body.dateStart, data.body.dateEnd, timeNow];
  db.query(sql, value, callback)
}

exports.deleteMovie = (data, callback) =>{
  const sql = 'DELETE FROM "movies" WHERE "idMovie" = $1 RETURNING*';
  const value = [data.idMovie];
  db.query(sql, value, callback) ;
}

exports.nowShowingMovie = (filter, callback) =>{
  const timeNow = new Date();
  const dateNow = timeNow.getFullYear() +"-"+ timeNow.getMonth() +"-"+ timeNow.getDate() +" "+ timeNow.getHours() +":"+ timeNow.getMinutes() +":"+ timeNow.getSeconds()
  console.log(dateNow)
  const sql = `SELECT m."titleMovie", g."genreName" FROM "movies" AS m JOIN "moviesGenres" AS mg ON m."idMovie" = mg."idMovie" JOIN genres AS g ON mg."idGenre" = g."idGenre" WHERE  m."dateStart" < $1 and m."dateEnd" > $1 LIKE $4 ORDER BY "${filter.sortBy}" ${filter.sort} LIMIT $2 OFFSET $3`
  const value = [dateNow, filter.limit, filter.offset, `%${filter.search}%`]
  db.query(sql, value, callback)
}

exports.countNowShowingMovies = (filter, callback) =>{
  const timeNowstamp = new Date().toISOString().slice(0, -1);
  const timeNow = new Date(Date.parse(timeNowstamp));
  const dateNow = (timeNow.getFullYear() +"-"+ timeNow.getMonth() +"-"+ timeNow.getDate() +" "+ timeNow.getHours() +":"+ timeNow.getMinutes() +":"+ timeNow.getSeconds())
  console.log("count timeNowstamp "+timeNowstamp)
  console.log("count timeNow "+timeNow)
  console.log("count dateNow "+dateNow)
  const sql = `SELECT COUNT(m."titleMovie") FROM "movies" AS m JOIN "moviesGenres" AS mg ON m."idMovie" = mg."idMovie" JOIN genres AS g ON mg."idGenre" = g."idGenre" WHERE  m."dateStart" < $1 and m."dateEnd" > $1 LIKE $2`;
  const value = [dateNow, `%${filter.search}%`]
  db.query(sql, value, callback)
}
