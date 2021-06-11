"use strict";
// Load the AWS SDK for Node.js
var AWSSQS = require("aws-sdk/clients/sqs");
// Set the region
//AWS.config.update({region: 'REGION'});

// Create an SQS service object
var sqs = new AWSSQS({ apiVersion: "2012-11-05" });

var queueUrl = "https://sqs.us-east-1.amazonaws.com/984648741180/evanq";
module.exports.hello = async (event) => {
  var param = event.body ? JSON.parse(event.body) : event;

  var params = {
    QueueUrl: param.queueUrl ?? queueUrl,
    VisibilityTimeout: 600, // 10 min wait time for anyone else to process.
  };

  var data = await sqs.receiveMessage(params).promise();
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
