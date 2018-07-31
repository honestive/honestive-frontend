import React from 'react'
import ReactDOM from 'react-dom'
import { CandourProvider } from 'candour'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import registerServiceWorker from './registerServiceWorker'
import App from './components/App'

import './theme/index.css'
import candourTheme from './theme/candour'

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_API,
})

ReactDOM.render(
  <CandourProvider value={candourTheme}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </CandourProvider>
, document.getElementById('root'))
registerServiceWorker()
