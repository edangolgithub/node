var dynamo = require("aws-sdk/clients/dynamodb")
const client = new dynamo.DocumentClient();

const dynamodb = new dynamo();


module.exports.scantable = (async (params) => {
    var params = {
        "TableName": params.TableName,
    }
    return await client.scan(params, (error, data) => {
        if (error) {
            console.log(error)
        }
    }).promise()
})

module.exports.querytable = (async (params) => {
    return await client.query(params, (error, data) => {
        if (error) {
            console.log(error)
        }
    }).promise()
})

module.exports.gettable = (async (params) => {

    return await client.get(params, function (err, data) {
        if (err) console.log(err);
    }).promise();
})

module.exports.createtable = (async (params) => {
    return dynamodb.createTable(params, function (err, data) {
        if (err) console.log(err);
    }).promise();
})

module.exports.puttable = (async (params) => {
    return client.put(params, function (err, data) {
        if (err) console.log(err);
    }).promise();
})