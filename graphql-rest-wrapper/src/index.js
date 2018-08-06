const Database = require('./Database') ;
const { GraphQLServer } = require('graphql-yoga')
const resolvers = require('./resolvers')

Database.open({mongoUri: 'mongodb://192.168.1.188:27017/contract-ingest'});

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
})

server.start(() => console.log(`Server is running on http://localhost:4000`))
