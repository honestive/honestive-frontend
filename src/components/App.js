import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import Landing from './Landing'
import Articles from './Articles'

export default () => (
  <Router>
    <div>
      <Route exact path='/' component={Landing} />
      <Route exact path='/a' component={Articles} />
    </div>
  </Router>
)
