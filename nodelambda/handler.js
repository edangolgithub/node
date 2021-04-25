'use strict';
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "remotemysql.com",
  user: "zZHNrdILlq",
  password: "hnmJyMt02K"
});

async function domysql() {
 await con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
  });
}

module.exports.hello = async (event) => {
  await domysql();
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
