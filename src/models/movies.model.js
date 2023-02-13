const db = require('../helpers/db.helper')

exports.allMovies = (filter, callback)=>{
  const sql = `SELECT * FROM "movies" WHERE "titleMovie" LIKE $3 ORDER BY "${filter.sortBy}" ${filter.sort} LIMIT $1 OFFSET $2`;
  const value = [filter.limit, filter.offset, `%${filter.search}%`]
  db.query(sql,value, callback)
}

exports.allMoviesSemua = (filter, callback)=>{
  // const sql = `SELECT m."idMovie", m."picture", m."titleMovie", STRING_AGG(g."genreName", ', ') AS genre FROM "movies" AS m JOIN "moviesGenres" AS mg ON m."idMovie" = mg."idMovie" JOIN "genres" AS g ON mg."idGenre" = g."idGenre" GROUP BY m."idMovie", m."titleMovie"`;
  const sql = `SELECT m."idMovie", m."picture", m."titleMovie", STRING_AGG(g."genreName", ', ') AS genre
  FROM "movies" AS m
  JOIN "moviesGenres" AS mg ON m."idMovie" = mg."idMovie"
  JOIN "genres" AS g ON mg."idGenre" = g."idGenre"
  WHERE m."titleMovie" LIKE $3
  GROUP BY m."idMovie", m."titleMovie"
  ORDER BY m."titleMovie" ${filter.sort}
  LIMIT $1
  OFFSET $2`;
  const value = [filter.limit, filter.offset, `%${filter.search}%`]
  // db.query(sql, callback)
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

exports.singleMovieDetail = (data, callback)=>{
  const sql = `SELECT m."idMovie", m."picture", m."titleMovie",m."direcredBy", m."releaseDate", m."duration", m.price, m.synopsis, STRING_AGG(DISTINCT(g."genreName"), ', ') AS genre, STRING_AGG(DISTINCT(c."castName"), ', ') AS cast FROM "movies" AS m JOIN "moviesGenres" AS mg ON m."idMovie" = mg."idMovie" JOIN "genres" AS g ON mg."idGenre" = g."idGenre" JOIN "moviesCasts" AS mc ON m."idMovie" = mc."idMovie" JOIN "casts" AS c ON mc."idCast" = c."idCast" WHERE m."idMovie" = $1 GROUP BY m."idMovie", m."titleMovie"`;
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
  const sql = 'UPDATE "movies" SET "titleMovie" = COALESCE(NULLIF($2, \'\')::VARCHAR, "titleMovie" ), "releaseDate" = COALESCE(NULLIF($3, \'\')::TIMESTAMP, "releaseDate" ), "direcredBy" = COALESCE(NULLIF($4, \'\')::VARCHAR, "direcredBy" ), "duration" = COALESCE(NULLIF($5, \'\')::TIME, "duration" ), "synopsis" = COALESCE(NULLIF($6, \'\')::TEXT, "synopsis" ), "price" = COALESCE(NULLIF($7, \'\')::INT, "price" ), "dateStart" = COALESCE(NULLIF($8, \'\')::TIMESTAMP, "dateStart" ), "dateEnd" = COALESCE(NULLIF($9, \'\')::TIMESTAMP, "dateEnd" ), "picture" = COALESCE(NULLIF($10, \'\')::VARCHAR, "picture" ), "updateDate" = $11  WHERE "idMovie" = $1 RETURNING*';
  const value = [data.params.idMovie, data.body.titleMovie, data.body.releaseDate, data.body.direcredBy, data.body.duration, data.body.synopsis, data.body.price, data.body.dateStart, data.body.dateEnd, data.body.picture, timeNow];
  db.query(sql, value, callback)
}

exports.deleteMovie = (data, callback) =>{
  const sql = 'DELETE FROM "movies" WHERE "idMovie" = $1 RETURNING*';
  const value = [data.idMovie];
  db.query(sql, value, callback) ;
}

exports.nowShowingMovie = (filter, callback) =>{
  const sql = `SELECT m."idMovie", m."picture", m."titleMovie", STRING_AGG(g."genreName", ', ') AS genre FROM "movies" AS m JOIN "moviesGenres" AS mg ON m."idMovie" = mg."idMovie" JOIN "genres" AS g ON mg."idGenre" = g."idGenre" WHERE (date(current_date) >= date("dateStart")) AND (date(current_date) <= date("dateEnd")) AND m."titleMovie" LIKE $3 GROUP BY m."idMovie", m."titleMovie" ORDER BY m."${filter.sortBy}" ${filter.sort} LIMIT $1 OFFSET $2`;
  const value = [filter.limit, filter.offset, `%${filter.search}%`]
  db.query(sql, value, callback)
}

exports.countNowShowingMovies = (filter, callback) =>{
  const sql = `SELECT COUNT("titleMovie") AS "totalData" FROM "movies" WHERE (date(current_date) >= date("dateStart")) AND (date(current_date) <= date("dateEnd")) AND "titleMovie" LIKE $1`;
  const value = [`%${filter.search}%`]
  db.query(sql, value, callback)
}

exports.upcomingMovie = ( filter, callback) =>{
  const sql = `SELECT m."idMovie", m."picture", m."titleMovie", STRING_AGG(g."genreName", ', ') AS genre FROM "movies" AS m JOIN "moviesGenres" AS mg ON m."idMovie" = mg."idMovie" JOIN "genres" AS g ON mg."idGenre" = g."idGenre" WHERE date_part('year', m."releaseDate")::TEXT = COALESCE(NULLIF($4, ''), date_part('year', current_date)::TEXT) AND date_part('month', m."releaseDate")::TEXT = COALESCE(NULLIF($5, ''), date_part('month', current_date)::TEXT) AND m."titleMovie" LIKE $3 GROUP BY m."idMovie", m."titleMovie" ORDER BY m."${filter.sortBy}" ${filter.sort} LIMIT $1 OFFSET $2`;
  const value = [filter.limit, filter.offset, `%${filter.search}%`, filter.year, filter.month]
  db.query(sql, value, callback)
}

exports.countUpcomingMovie = (filter, callback) =>{
  const sql = `SELECT COUNT("titleMovie") AS "totalData" FROM "movies" WHERE date_part('year', "releaseDate")::TEXT = COALESCE(NULLIF($2, ''), date_part('year', current_date)::TEXT) AND date_part('month', "releaseDate")::TEXT = COALESCE(NULLIF($3, ''), date_part('month', current_date)::TEXT) AND "titleMovie" LIKE $1`;
  const value = [`%${filter.search}%`, filter.year, filter.month]
  db.query(sql, value, callback)
}
