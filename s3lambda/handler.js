'use strict';
var s3 = require("./s3")


module.exports.hello = async (event) => {

  console.log(event.fun);
  //console.log(event.data.name)
  var fun;
  var data;
  var param = event.body ? JSON.parse(event.body) : event;

  fun = param.fun;
  data = param.data;


  switch (fun) {
    case "creates3":
      var data = await s3.createBucket(param.data.bucketname)
      break;
    case "lists3":
      var data = await s3.listbuckets();
      break;
    case "lists3object":
      var data = await s3.listobjects();
      break;
    case "lists3objectv2":
      var data = await s3.listobjectsv2();
      break;
    case "fileupload":
      var data = await s3.fileupload();
      break;
    case "imageupload":
      var data = await s3.uploadimage();
      break;

    default:
      return response("all is well")
  }
  return response(data);
};

function response(data) {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',

        data: data
      },
      null,
      2
    )
  }
}

