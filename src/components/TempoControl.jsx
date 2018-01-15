import React from 'react'
import {FormGroup, ControlLabel} from 'react-bootstrap'
import ReactBootstrapSlider from 'react-bootstrap-slider';

import {TempoOptions} from '../constants'
import actions from '../app-actions'

export default ({tempo}) => {
  const changeValue = e => actions.setTempo(e.target.value)

  return (
    <FormGroup>
      <ControlLabel>Tempo <div id="play-visual" className="pattern-player-visual"></div></ControlLabel>
      <div className="form-control tempo-control">
      <ReactBootstrapSlider
        value={tempo}
        change={changeValue}
        slideStop={changeValue}
        step={5}
        max={TempoOptions.bpms[TempoOptions.bpms.length - 1]}
        min={TempoOptions.bpms[0]} 
        ticks = {TempoOptions.bpms}
        ticks_labels = {TempoOptions.labels}/>
      </div>
    </FormGroup>
  )
}
