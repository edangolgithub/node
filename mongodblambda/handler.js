const mongo = require("./mongo")
module.exports.hello = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  var param = event.body ? JSON.parse(event.body) : event;

  const data = await resolveparam(param)

  return response(data);
};

function response(data) {
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };

}
async function resolveparam(param) {
  switch (param.fun) {
    case "insertone":
      return await mongo.insertone(param)
    case "find":
      return await mongo.find(param)
    case "listdb":
      return await mongo.listDatabases(param)
    case "findone":
      return await mongo.findone(param)
    default:
      return "please input function name on json file"
  }
}