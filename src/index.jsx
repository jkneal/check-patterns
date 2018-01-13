import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import createHistory from 'history/createBrowserHistory'

import App from './App'
import Home from './Home'

const history = createHistory()

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
    </Route>
  </Router>
), document.getElementById('app'))
