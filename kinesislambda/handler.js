"use strict";
const aws = require("aws-sdk");
var ses = new aws.SES({
  region: "us-east-1",
});
module.exports.hello = async (event) => {
  let payload = "";
  event.Records.forEach(function (record) {
    // Kinesis data is base64 encoded so decode here
    payload = new Buffer(record.kinesis.data, "base64").toString("ascii");
    console.log("Decoded payload:", payload);
  });
  var eParams = {
    Destination: {
      ToAddresses: ["dangolevan@gmail.com"],
    },
    Message: {
      Body: {
        Text: {
          Data: payload,
        },
      },
      Subject: {
        Data: "Kinesis data stream",
      },
    },
    Source: "no-reply@ecolawnlandscaping.tk",
  };
  try {
    var email = await ses.sendEmail(eParams).promise();
    console.log("===EMAIL SENT===");
    console.log("EMAIL CODE END");
    console.log("EMAIL: ", email);
  } catch (err) {
    console.log(err);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v1.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
//aws kinesis put-record --stream-name kinesisstream  --data "hello world" --partition-key "789675"
