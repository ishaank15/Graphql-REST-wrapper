// import { ApolloClient } from 'apollo-client'
// import { HttpLink } from 'apollo-link-http'
// import { InMemoryCache } from 'apollo-cache-inmemory'

// const httpLink = new HttpLink({ uri: 'http://192.168.1.188:4000/graphql' })

// const client = new ApolloClient({
//   link: httpLink,
//   cache: new InMemoryCache()
// })

import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import { split } from 'apollo-client-preset'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'

const httpLink = new HttpLink({ uri: 'http://192.168.1.188:4000/graphql' })

const wsLink = new WebSocketLink({
  uri: `ws://192.168.1.188:4000/subscriptions`,
  options: {
    reconnect: true,
  }
})

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === 'OperationDefinition' && operation === 'subscription'
  },
  wsLink,
  httpLink,
)

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
})

export default client