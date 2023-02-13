const db = require('../helpers/db.helper')

exports.allOrders = (callback)=>{
  const sql = 'SELECT * FROM "orders"';
  db.query(sql, callback);
}

exports.singleOrder = (data, callback)=>{
  const sql = 'SELECT * FROM "orders" WHERE "idOrder" = $1';
  const value = [data.idOrder];
  db.query(sql, value, callback) ;
}

exports.orderByUser = (data, callback)=>{
  const sql = `SELECT o."idOrder", o."idUser", o."dateAndTime", st."showtimeName", m."titleMovie", p."premiereName", p."imagePremiere" FROM "orders" AS o
  JOIN movies AS m on m."idMovie" = o."idMovie"
  JOIN showtimes as st on st."idShowtime" = o."idShowtime"
  JOIN premieres as p on p."idPremiere" = o."idPremiere"
  WHERE o."idUser" = $1`;
  const value = [data.idUser];
  db.query(sql, value, callback) ;
}

exports.orderDetailsById = (data, callback)=>{
  const sql = `SELECT o."idOrder", o."dateAndTime", st."showtimeName", m."titleMovie", o.seat, o.total, m."titleMovie", STRING_AGG(g."genreName", ', ') AS genre
  FROM "orders" AS o
  JOIN movies AS m on m."idMovie" = o."idMovie"
  JOIN showtimes as st on st."idShowtime" = o."idShowtime"
  JOIN "moviesGenres" AS mg ON mg."idMovie" = m."idMovie"
  join genres AS g ON g."idGenre" = mg."idGenre"
  WHERE o."idOrder" = $1
  GROUP BY o."idOrder", o."dateAndTime", st."showtimeName", m."titleMovie", o.seat, o.total, m."titleMovie" `;
  const value = [data.idOrder];
  db.query(sql, value, callback) ;
}

exports.createOrder = (data, callback) =>{
  const sql = `INSERT INTO "orders"
  ("dateAndTime", "idUser", "idMovie", "email", "fullName", "phone", "idLocation", "idPremiere", "seat", "idShowtime", "idPayment", "total")
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
  RETURNING*`;
  const value = [data.dateAndTime, data.idUser, data.idMovie, data.email, data.fullName, data.phone, data.idLocation, data.idPremiere, data.seat, data.idShowtime, data.idPayment, data.total];
  db.query(sql, value, callback) ;
}

exports.updateOrder = (data, callback) =>{
  const timeNow = new Date();
  const sql = 'UPDATE "orders" SET "dateAndTime" = COALESCE(NULLIF($2, \'\')::TIMESTAMP, "dateAndTime" ), "idUser" = COALESCE(NULLIF($3, \'\')::INT, "idUser" ), "idMovie" = COALESCE(NULLIF($4, \'\')::INT, "idMovie" ), "idMoviesShowtime" = COALESCE(NULLIF($5, \'\')::INT, "idMoviesShowtime" ), "idSeat" = COALESCE(NULLIF($6, \'\')::INT, "idSeat" ), "idSeatStatus" = COALESCE(NULLIF($7, \'\')::INT, "idSeatStatus" )$7, "idOrderStatus" = COALESCE(NULLIF($8, \'\')::INT, "idOrderStatus" ), "updateDate" = COALESCE(NULLIF($9, \'\')::INT, "updateDate" ) WHERE "idOrder" = $1 RETURNING*';
  const value = [data.params.idOrder, data.body.dateAndTime, data.body.idUser, data.body.idMovie, data.body.idMoviesShowtime, data.body.idSeat, data.body.idSeatStatus, data.body.idOrderStatus, timeNow];
  db.query(sql, value, callback)
}

exports.deleteOrder = (data, callback) =>{
  const sql = 'DELETE FROM "orders" WHERE "idOrder" = $1 RETURNING*';
  const value = [data.idOrder];
  db.query(sql, value, callback) ;
}
