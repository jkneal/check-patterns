import React from 'react'
import {map} from 'lodash'
import {ListGroup, ListGroupItem, Panel} from 'react-bootstrap'

import actions from '../app-actions'

export default React.createClass({

  render: function() {
    const {patternGroups, loadedPattern} = this.props
    return (
      <div className="pattern-list">
        {map(patternGroups, (group, key) => (
            <Panel key={key} header={group.title}>
              {map(group.subGroups, (subGroup, key) => (
                <PatternSubGroup key={key} subGroup={subGroup} loadedPattern={loadedPattern}/>
              ))}
            </Panel>
          ))}
      </div>
    )
  }

})

const PatternSubGroup = ({subGroup, loadedPattern}) => {
  return (
    <div>
      <i>{subGroup.title}</i>
      <ListGroup fill>
        {map(subGroup.patterns, (pattern, key) => (
            <PatternLink key={key} pattern={pattern} loadedPattern={loadedPattern}/>
          ))}
      </ListGroup>
    </div>
  )
}

const PatternLink = ({pattern, loadedPattern}) => {
  const active = pattern.id === loadedPattern.id

  const onClick = e => {
    e.preventDefault()
    actions.loadPattern(pattern.id)
  }

  return (
    <ListGroupItem href="#" onClick={onClick} active={active}>
      <small>{pattern.title}</small>
    </ListGroupItem>
  )
}

