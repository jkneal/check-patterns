import React from 'react'
import {ListGroup, ListGroupItem, Panel} from 'react-bootstrap'

export default ({pattern}) => {
  return (
    <div className="pattern-samples">
      <Panel header="Song Examples">
        <ListGroup fill>
          <ListGroupItem><div id="ex1-player"></div><div>Young Person's Guide to the Orchestra - Benjim Brittan</div></ListGroupItem>
          <ListGroupItem><small>Variation 2</small></ListGroupItem>
          <ListGroupItem><small>Variation 3</small></ListGroupItem>
        </ListGroup>
      </Panel>
    </div>
  )
}
