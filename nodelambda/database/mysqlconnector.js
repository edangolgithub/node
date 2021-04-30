var mysql = require('mysql');

// var util = require('util')
// var con = mysql.createConnection({
//   host: "remotemysql.com",
//   user: "zZHNrdILlq",
//   password: "hnmJyMt02K",
//   database: "zZHNrdILlq"
// });
var pool = mysql.createPool({
  connectionLimit: 10,
  host: 'remotemysql.com',
  user: 'zZHNrdILlq',
  password: 'hnmJyMt02K',
  database: 'zZHNrdILlq'
})

module.exports=pool;