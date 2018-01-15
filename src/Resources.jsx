import React from 'react'
import {Alert, Panel} from 'react-bootstrap'

export default React.createClass({
    
    render: function() {

      return (
        <Panel className="resources-container">
          <h3><i className="fa fa-file-audio-o" aria-hidden="true"></i> Audio Files</h3>
          <p>Audio files are looped for listening</p>

          <Alert bsStyle="warning">
            <strong>Problems with Audio Player?</strong>
          </Alert>

          <h3><i className="fa fa-headphones" aria-hidden="true"></i> More Listening</h3>

          <h3><i className="fa fa-book" aria-hidden="true"></i> Books/DVDs</h3>
         
        </Panel>
      )
    }

  })
