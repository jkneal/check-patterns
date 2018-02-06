import React from 'react'
import {map} from 'lodash'
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap'

import actions from '../app-actions'

export default React.createClass({

  render: function() {
    const {patternGroups, loadedPattern} = this.props

    let allPatterns = [];
    patternGroups.forEach(group => {
      group.subGroups.forEach(subGroup => {
        allPatterns = allPatterns.concat(subGroup.patterns)
      })
    })

    const onChange = e => {
      actions.loadPattern(parseInt(e.target.value))
    }

    return (
      <div className="pattern-list-mobile">
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Select Pattern</ControlLabel>
          <FormControl componentClass="select" placeholder="select"
            value={loadedPattern.id} onChange={onChange}>
            <option value="select">select</option>
            {map(allPatterns, (pattern, key) => (
              <option value={pattern.id}>{pattern.titlePrefix} {pattern.title}</option>
            ))}
          </FormControl>
        </FormGroup>
      </div>
    )
  }

})
