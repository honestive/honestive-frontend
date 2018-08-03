import React from 'react'
import ReactDOM from 'react-dom'
import { CandourProvider } from 'candour'
import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { BatchHttpLink } from 'apollo-link-batch-http'

import registerServiceWorker from './registerServiceWorker'
import App from './components/App'

import './theme/index.css'
import candourTheme from './theme/candour'

const link = new BatchHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_API,
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <CandourProvider value={candourTheme}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </CandourProvider>
, document.getElementById('root'))
registerServiceWorker()
