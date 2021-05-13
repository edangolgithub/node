console.log("Loading function");

const AwsS3 = require("aws-sdk/clients/s3");
const Awsses = require("aws-sdk/clients/ses");
const s3 = new AwsS3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: "us-east-1",
});
var ses = new Awsses({
  region: "us-east-1",
});
module.exports.hello = async (event, context) => {
  console.log("Incoming: ", event);

  const bucket = event.Records[0].s3.bucket.name;
  const key = decodeURIComponent(
    event.Records[0].s3.object.key.replace(/\+/g, " ")
  );
  console.log(event.Records[0].s3.object);
  const news = `Some one uploaded- ${key} in Bucket ${bucket} -> ${key}
  https://s3.console.aws.amazon.com/s3/buckets/contactuseco?region=us-east-1&tab=objects
  `;

  const params = {
    Bucket: bucket,
    Key: key,
  };
  var eParams = {
    Destination: {
      ToAddresses: ["dangolevan@gmail.com","mahesh@ecolawnlandscaping.com"],
    },
    Message: {
      Body: {
        Text: {
          Data: `${news}`,
        },
      },
      Subject: {
        Data: "Upload Notification",
      },
    },
    Source: "'S3 Bucket' <noreply@ecolawnlandscaping.tk>",
  };
  console.log("===SENDING EMAIL===");
  try {
    const email = await ses.sendEmail(eParams).promise();
    console.log(email);
    console.log("Email was sent");
  } catch (err) {
    console.log("There was an error");
  }
};
