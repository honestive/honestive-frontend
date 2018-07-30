import React from 'react'
import ReactDOM from 'react-dom'
import { CandourProvider } from 'candour'

import registerServiceWorker from './registerServiceWorker'
import App from './components/App'

import './theme/index.css'
import candourTheme from './theme/candour'

ReactDOM.render(
  <CandourProvider value={candourTheme}>
    <App />
  </CandourProvider>
, document.getElementById('root'))
registerServiceWorker()
