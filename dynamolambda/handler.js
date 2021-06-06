'use strict';
const { v4: uuidv4 } = require('uuid');
const dynamo = require("./dynamo")
module.exports.hello = async (event) => {
  var param = event.body ? JSON.parse(event.body) : event;
     console.log(event);
  switch (param.fun) {
    case "scan":
      var data = await dynamo.scantable(param);
      return response(data)
    case "query":
      var data = await dynamo.querytable(param);
      return response(data)
    case "get":
      var data = await dynamo.gettable(param);
      return response(data)
    case "create":
      delete param.fun;
      var data = await dynamo.createtable(param);
      return response(data)
    case "put":
      var data = await dynamo.puttable(param);
      return response(data)
    default:
      return response("All is well")
  }


};

function response(data) {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
      'Access-Control-Allow-Credentials': true // Required for CORS support to work
    },
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: data,
      },
      null,
      2
    ),
  };
}