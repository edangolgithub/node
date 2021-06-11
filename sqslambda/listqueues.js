// Load the AWS SDK for Node.js
var AWSSQS = require('aws-sdk/clients/sqs');
// Set the region 
//AWS.config.update({region: 'REGION'});

// Create an SQS service object
var sqs = new AWSSQS({apiVersion: '2012-11-05'});

var params = {};

sqs.listQueues(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.QueueUrls);
  }
});
