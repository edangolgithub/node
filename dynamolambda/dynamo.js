var dynamo = require("aws-sdk/clients/dynamodb")

const client = new dynamo.DocumentClient();


module.exports.scantable =(async (tablename) => {
    const params = {
        TableName: tablename,
    };
   return await client.scan(params, (error, data) => {
        if (error) {
            console.log(error)
        }
       
    }).promise()
})

module.exports.querytable=(async(params)=>{
    return await client.query(params, (error, data) => {
        if (error) {
            console.log(error)
        }
       
    }).promise()
})