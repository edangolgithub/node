'use strict';
let aws = require('aws-sdk');
let kinesis = new aws.Kinesis();
module.exports.hello = async (event) => {
  

// data that you'd like to send
let data_object = { "some": "properties" };
let data = JSON.stringify(data_object);

// push data to kinesis
const params = {
  Data: data,
  PartitionKey: "1",
  StreamName: "kinesisstream"
}

kinesis.putRecord(params, (err, data) => {
  if (err) console.error(err);
  else console.log("data sent");
})
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
