import React from 'react'
import ReactDOM from 'react-dom'
import { CandourProvider } from 'candour'
import CandourNormalize from 'candour-normalize'
import fluidSteps from 'candour-fluid-steps'
import colors from 'candour-colors'
import borders from 'candour-borders'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import registerServiceWorker from './registerServiceWorker'
import App from './components/App'

import './theme/index.css'
import theme from './theme'

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_API,
})

ReactDOM.render(
  <CandourProvider
    theme={theme}
    converters={[fluidSteps, colors, borders]}
    colors={{
      'transparent-white': 'hsla(0, 0%, 100%, .8)',
      aqua: '#BAF7EC',
    }}
    breakpoints={{ small: '768px' }}
    borders={{ dark: '1px solid hsla(0, 0%, 0%, .1)' }}
  >
    <CandourNormalize />

    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </CandourProvider>
, document.getElementById('root'))
registerServiceWorker()
