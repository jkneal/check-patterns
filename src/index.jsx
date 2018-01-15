import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute} from 'react-router'

import {history} from './config'
import App from './App'
import Home from './Home'
import Resources from './Resources'

ReactDOM.render((
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="resources" component={Resources}/>
    </Route>
  </Router>
), document.getElementById('app'))
