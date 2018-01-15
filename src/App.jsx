import React from 'react'
import Reflux from 'reflux'
import {Navbar, Nav, NavItem} from 'react-bootstrap'

import {history} from './config'
import appStore from './app-store'
import './app.css'

export default React.createClass({
  
    mixins: [Reflux.connect(appStore, 'appData')],

    navigateHome: function(e) {
      e.preventDefault()
      history.push("/")
    },

    navigateResources: function(e) {
      e.preventDefault()
      history.push("/resources")
    },
  
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
                <a href="#" onClick={this.navigateHome}><img src="images/logo.png"/></a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <NavItem eventKey={1} href="#" onClick={this.navigateResources}>
                  <i className="fa fa-question-circle" aria-hidden="true"></i> Help
                </NavItem>  
                <NavItem eventKey={2} href="mailto:jkneal@iu.edu">
                  <i className="fa fa-envelope" aria-hidden="true"></i> Contact
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <div className="container">
            {this.props.children}
          </div>
        </div>
      )
    }
  })
