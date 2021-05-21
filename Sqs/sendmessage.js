// Load the AWS SDK for Node.js
var AWSSQS = require('aws-sdk/clients/sqs');
// Set the region 
//AWS.config.update({region: 'REGION'});

// Create an SQS service object
var sqs = new AWSSQS({apiVersion: '2012-11-05'});

var queueUrl="https://sqs.us-east-1.amazonaws.com/984648741180/orders";

var params = {
        MessageBody: 'Hello world!',
        QueueUrl: queueUrl,
        DelaySeconds: 0
    };

  var data1=  sqs.sendMessage(params, function(err, data) {
        if(err) {
            console.log(err);
        }
        else {
            console.log(data);
        }
    });
    console.log(data1);
   