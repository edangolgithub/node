'use strict';
const dynamo = require("./dynamo")
module.exports.hello = async (event) => {
  var param = event.body ? JSON.parse(event.body) : event;
  const data = await dynamo.querytable(param);
   
  return response(data)

};

function response(data) {
  return {
    statusCode: 200,
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