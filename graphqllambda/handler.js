const { GraphQLClient } = require("graphql-request");

exports.hello = async (event, context) => {
  var param = event.body ? JSON.parse(event.body) : event;
console.log(param);
//return;
  const endpoint = process.env.API_URL;
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      "x-api-key": process.env.API,
    },
  });

  const mutation = `
    mutation CreateTodo($input:CreateTodoInput!) {
      createTodo(input:$input) {
        id
        name
        message
        customer
        user
        read
        createdAt
        updatedAt
      }
    }
  `;

  const variables = `
  {
    "input": {
     "name": "${param.name}",
     "message":"${param.message}",
     "customer":"${param.customer}",
     "user":"${param.user}",
     "read": "${param.read}"
   }
  }
  `;

  const data = await graphQLClient.request(mutation, variables);

  console.log(data);
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
  };
};
