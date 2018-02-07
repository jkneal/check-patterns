import React from 'react'
import {ListGroup, ListGroupItem, Panel} from 'react-bootstrap'
import {map} from 'lodash'

import AudioPlayer from '../components/AudioPlayer'

export default ({examples}) => {
  return (
    <div className="pattern-samples">
      <Panel header="Song Examples">
        <ListGroup fill>
          {map(examples, (example, key) => (
              <ListGroupItem>
                <AudioPlayer id={'ex' + key + '-player'} file={example.file}/>
                {example.title} 
                <span className="badge badge-info">{example.tempo}</span>
              </ListGroupItem>
            ))}
        </ListGroup>
      </Panel>
    </div>
  )
}
