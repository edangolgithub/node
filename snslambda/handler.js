"use strict";
var AWS = require("aws-sdk");
AWS.config.region = "us-east-1";
module.exports.hello = async (event) => {
  console.log("\n\nLoading handler\n\n");
  var sns = new AWS.SNS();

  const data = await sns
    .publish({
      Message: "Test publish to SNS from Lambda",
      TopicArn: "arn:aws:sns:us-east-1:984648741180:evansns",
    })
    .promise();
  console.log(data);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v1.0! Your function executed successfully!",
        input: data,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};


