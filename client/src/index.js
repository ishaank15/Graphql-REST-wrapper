import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import { ApolloProvider } from 'react-apollo'
import client from './ApolloClient'
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
  ,
  document.getElementById('root'),
)
registerServiceWorker()