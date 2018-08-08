const Database = require('./Database') ;
const { GraphQLServer } = require('graphql-yoga')
const resolvers = require('./resolvers')
const pubsub = require('./subscriptions');

Database.open({mongoUri: 'mongodb://192.168.1.188:27017/contract-ingest'});

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: { pubsub }
})

const options = {
  port: 4000,
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  // playground: '/playground',
}

server.start(options, ({port}) => console.log(`Server is running on http://localhost:${port}`))