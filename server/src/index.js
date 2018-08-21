// ----------------GRAPHQL SERVER----------------------
// const Database = require('./Database') ;
// const resolvers = require('./resolvers');

// const { GraphQLServer } = require('graphql-yoga')
// const pubsub = require('./subscriptions');

// const server = new GraphQLServer({
//   typeDefs: './src/schema.graphql',
//   resolvers,
//   context: { pubsub },
//   engine: {
//     apiKey: "service:apollo-test-1234:-NF8et06h5FAfRosphWVZA"
//     }
// })

// const options = {
//   port: 4000,
//   endpoint: '/graphql',
//   subscriptions: '/subscriptions',
//   // playground: '/playground',
// }

// server.start(options, async ({port}) => {
//   await Database.open({mongoUri: 'mongodb://localhost:27017/apollo'});
//   console.log(`Server is running on http://localhost:${port}`);
// });

// -----------------------Apollo Server-----------------------

const { ApolloServer, gql } = require('apollo-server');
const Database = require('./Database') ;
const resolvers = require('./resolvers');

const typeDefs = gql`
type Query {
  users: [User!]!
  user(name: String!): [User!]!
  getUserByName(name: String!): [User!]!
}

type Mutation {
 createUser(name: String!): User!
}

type Subscription {
	userCreated: User!
}

type User {
  id: ID!
  name: String!
}
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  engine: {
    apiKey: ""
  }
});

server.listen().then( async ({ url }) => {
  await Database.open({mongoUri: 'mongodb://localhost:27017/apollo'});
  console.log(`🚀  Server ready at ${url}`);
});