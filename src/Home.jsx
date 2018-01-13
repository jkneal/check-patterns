import React from 'react'
import Reflux from 'reflux'
import {ListGroup, ListGroupItem, Panel, FormGroup, ControlLabel, Radio} from 'react-bootstrap'
import ReactBootstrapSlider from 'react-bootstrap-slider';

import appStore from './app-store'

import PatternList from './layout/PatternList'
import PatternViewer from './layout/PatternViewer'
import SongExamples from './layout/SongExamples'
import AudioPlayer from './components/AudioPlayer'

export default React.createClass({
  
    mixins: [Reflux.connect(appStore, 'appData')],
  
    render: function() {
      if (!(this.state && this.state.appData)) {
        return null
      }
  
      const {patternGroups, loadedPattern} = this.state.appData

      return (
        <div>
          <Panel className="pattern-container">
            <PatternList patternGroups={patternGroups} loadedPattern={loadedPattern}/>

            <div className="pattern-main">   
              <PatternViewer pattern={loadedPattern}/>

              <div className="pattern-tempo">
                <FormGroup>
                  <ControlLabel>Tempo</ControlLabel>
                  <div className="form-control tempo-control">
                  <ReactBootstrapSlider
                    value={100}
                    step={5}
                    max={120}
                    min={80} 
                    ticks = {[80, 85, 90, 95, 100, 105, 110, 115, 120]}
                    ticks_labels = {[80, '', 90, '', 100, '', 110, '', 120]}/>
                  </div>
                </FormGroup>
              </div>

              <div className="pattern-options">
                <FormGroup>
                  <ControlLabel>Click</ControlLabel>
                  <Radio name="clickOption">None</Radio>
                  <Radio name="clickOption">Quarter Notes</Radio>
                  <Radio name="clickOption">Eighth Notes</Radio>
                  <Radio name="clickOption">One and Three</Radio>
                  <Radio name="clickOption">One Only</Radio>
                </FormGroup>
              </div>

              <SongExamples pattern={loadedPattern}/>
            </div>
          </Panel>
        </div>
      )
    }

  })
