var axios = require("axios");

async function main() {
  var d = await axiostest1();
 // console.log(d);
}

async function axiostest() {
  var data = axios.get(
    "https://5w9ovuk4sh.execute-api.us-east-1.amazonaws.com/api/Inventory"
  );

  return await data;
}

async function axiostest1() {
  return new Promise((resolve, reject) => {
    var data = axios.get(
      "https://5w9ovuk4sh.execute-api.us-east-1.amazonaws.com/api/Inventory"
    );
    resolve(data);
    reject(data)
  }).catch(err=>{console.log(err.reason);
  return err;
  })

  return await data;
}

main();
