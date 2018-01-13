import React from 'react'
import Reflux from 'reflux'
import {Navbar} from 'react-bootstrap'

import appStore from './app-store'
import './app.css'

export default React.createClass({
  
    mixins: [Reflux.connect(appStore, 'appData')],
  
    render: function() {
      if (!(this.state && this.state.appData)) {
        return null
      }
  
      const appData = this.state && this.state.appData ? this.state.appData : {}

      return (
        <div>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <img src="images/logo.png"/>
              </Navbar.Brand>
            </Navbar.Header>
          </Navbar>
          <div className="container">
            {this.props.children}
          </div>
        </div>
      )
    }
  })
