var mysql = require('mysql');

var con = mysql.createConnection({
    host: "remotemysql.com",
       user: "zZHNrdILlq",
       password: "hnmJyMt02K",
       database: "zZHNrdILlq"
});

con.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }

  console.log('Connected to database.');
});

exports.mysqlselect=async function()
{
    return new Promise((resolve, reject) => {
        const readTable = "SELECT * FROM evan";
        con.query(readTable, (err, results, fields) => {
          if (err) {
            con.end();
            reject(err);
          } else {
            con.end();
            resolve(results);
           
          }
        });
      });
}

module.exports=con;