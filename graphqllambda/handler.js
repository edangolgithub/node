const { GraphQLClient } = require('graphql-request');

exports.hello = async (event, context) => {

//console.log(process.env.API);

  const endpoint = process.env.API_URL;
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      'x-api-key': process.env.API
    }
  });

  const mutation = `
    mutation CreateTodo($input:CreateTodoInput!) {
      createTodo(input:$input) {
        id
        name
        description
      }
    }
  `;

  const variables = `
  {
    "input": {
     "name": "go to the doctor",
     "description": "seeing Dr Ho"
   }
  }
  `;

  const data = await graphQLClient.request(mutation, variables);

console.log(data);
  return data;
};
