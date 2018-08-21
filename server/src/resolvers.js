const fetch = require('node-fetch')

const Users = require('./user')
// const { withFilter } = require('graphql-subscriptions'); 
const pubsub = require('./subscriptions');

const resolvers = {
  Query: {
    users: () => {
      return Users.find({});
    },

    user: (parent, {name}) => {
      return Users.find({name})
    },

    getUserByName: (parent, {name}) => {
      return Users.find({name})
    }
  },

  Mutation: {
    createUser: async (parent, args) => {
        const { name } = args;
        Users.insertMany({name: name})
      // const body = {name: args.name}
      // const res =  await fetch('http://192.168.1.188:9000/api/user/create', { 
      //   method: 'POST',
      //   body:    JSON.stringify(body),
      //   headers: { 'Content-Type': 'application/json' },
      // })

      // const { data } = await res.json();
      pubsub.publish("userCreated", { userCreated: args }); // trigger a change to all subscriptions to this person
      return args;

      // return data;
    }

  },

  Subscription: {
    userCreated: {
      // subscribe: withFilter(() => pubsub.asyncIterator('userCreated'), (payload, args) => {
      //   console.log('payload', payload, args);
      //   return payload.userCreated.name;
      // })

      subscribe: (parent, args) => {
        return pubsub.asyncIterator('userCreated')
      },
    }
  }

}

module.exports = resolvers
