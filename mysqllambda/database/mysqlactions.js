var mysql = require('mysql');
exports.select = async function (pool) {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM evan ', (error, elements) => {
            if (error) {
                pool.end()
                return reject(error);
            }
            pool.end()
            return      resolve(elements);

        });
    });


}
exports.mysqlinsert = async function (pool, data) {
    //dat=[data.name,data.address];
    return new Promise((resolve, reject) => {
       // pool.query("insert into evan (name,address) values(?,?)",
       pool.query("insert into evan SET ?",
         [data], 
         (error, results) => {
            if (error) {
                pool.end()
                return reject(error);
            }
            
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

        });
    });
}


exports.mysqlquery = async function (data) {
    var pool = mysql.createPool({
        connectionLimit: 10,
        host: data.host,
        user: data.user,
        password: data.password,
        database: data.database
      })
    //dat=[data.name,data.address];
    return new Promise((resolve, reject) => {
      
       pool.query(data.query,
         [data.data], 
         (error, results) => {
            if (error) {
                pool.end()
                return reject(error);
            }
            
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

        });
    });
}