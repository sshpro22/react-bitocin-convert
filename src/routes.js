import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import WizardForm from './containers/WizardForm'

export default (
  <Router>
    <Switch>
      <Route path="/" component={WizardForm} />
    </Switch>
  </Router>
)