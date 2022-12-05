const db = require('../helpers/db.helper')

// exports.allOrdersStatus = (callback)=>{
//   const sql = 'SELECT * FROM "ordersStatus"';
//   db.query(sql, callback);
// }

exports.allOrdersStatus = (filter, callback)=>{
  const sql = `SELECT * FROM "ordersStatus" WHERE "orderStatusName" LIKE $3 ORDER BY "${filter.sortBy}" ${filter.sort} LIMIT $1 OFFSET $2`;
  const value = [filter.limit, filter.offset, `%${filter.search}%`]
  db.query(sql,value, callback)
}

exports.countOrdersStatus = (filter, callback) =>{
  const sql = `SELECT COUNT("orderStatusName") AS "totalData" FROM "ordersStatus" WHERE "orderStatusName" LIKE $1`;
  const value = [`%${filter.search}%`]
  db.query(sql, value, callback)
}

exports.singleOrderStatus = (data, callback)=>{
  const sql = 'SELECT * FROM "ordersStatus" WHERE "idOrderStatus" = $1';
  const value = [data.idOrderStatus];
  db.query(sql, value, callback) ;
}

exports.createOrderStatus = (data, callback) =>{
  const sql = 'INSERT INTO "ordersStatus" ("orderStatusName") VALUES ($1) RETURNING*';
  const value = [data.orderStatusName];
  db.query(sql, value, callback) ;
}

exports.updateOrderStatus = (data, callback) =>{
  console.log(data.body)
  const timeNow = new Date();
  const sql = 'UPDATE "ordersStatus" SET "orderStatusName" = COALESCE(NULLIF($2, \'\')::VARCHAR, "orderStatusName" ),  "updateDate" = $3 WHERE "idOrderStatus" = $1 RETURNING*';
  const value = [data.params.idOrderStatus, data.body.orderStatusName, timeNow];
  db.query(sql, value, callback)
}

exports.deleteOrderStatus = (data, callback) =>{
  const sql = 'DELETE FROM "ordersStatus" WHERE "idOrderStatus" = $1 RETURNING*';
  const value = [data.idOrderStatus];
  db.query(sql, value, callback) ;
}
