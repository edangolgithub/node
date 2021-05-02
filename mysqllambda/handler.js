'use strict';
var pool = require('./database/mysqlconnector')
var db = require('./database/mysqlactions')
//var con=require("./database/mysqle")


module.exports.hello = async (event) => {

  console.log(event.fun);
  //console.log(event.data.name)
  var fun;
  var data;
  var param = event.body ? JSON.parse(event.body) : event;

  fun = param.fun;
  data = param.data;


  switch (fun) {
    case "mysqlselect":
      return await mysqlselect();
    case "mysqlinsert":
      return await db.mysqlinsert(pool, data);
    case "mysqlquery":
      return await db.mysqlquery(param);

    default:
      return {
        statusCode: 200,
        body: JSON.stringify(
          {
            message: 'Go Serverless v1.0! Your function executed successfully!',

            data: event
          },
          null,
          2
        )
      }
  }
};

async function mysqlselect() {
  return new Promise((resolve, reject) => {
    const readTable = `SELECT * FROM evan`;
    pool.query(readTable, (err, results, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve({
          statusCode: 200,
          body: JSON.stringify(
            {
              message: 'Go Serverless v1.0! Your function executed successfully!',

              data: results
            },
            null,
            2
          )
        });
        pool.end();
      }
    });

  });
}
// module.exports.hello = async (event) => {

//   var data = {
//     name: "ramu",
//     address: "paris"
//   }

//   const res = await db.insertmysql(pool, data);
//   console.log(res);

//   const rows = await db.select(pool);
//   console.log(rows)

//   pool.end()

//   return {
//     statusCode: 200,
//     body: JSON.stringify(
//       {
//         message: 'Go Serverless v1.0! Your function executed successfully!',
//         input: event,
//         // data: data
//       },
//       null,
//       2
//     ),
//   };

//   // Use this code if you don't use the http event with the LAMBDA-PROXY integration
//   // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
// };


// module.exports.hello = async (event) => {

//   //console.log(event);
//   //console.log(event.data.name)

//   return new Promise((resolve, reject) => {
//     const readTable = `SELECT * FROM evan`;
//     con.query(readTable, (err, results, fields) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve({statusCode: 200, body: {results}});
//       }
//     });

//   });
// };
