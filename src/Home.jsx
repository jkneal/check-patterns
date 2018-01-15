import React from 'react'
import Reflux from 'reflux'
import {Panel} from 'react-bootstrap'

import appStore from './app-store'

import PatternList from './layout/PatternList'
import PatternViewer from './layout/PatternViewer'
import SongExamples from './layout/SongExamples'
import PatternControls from './layout/PatternControls'
import AudioPlayer from './components/AudioPlayer'

export default React.createClass({
  
    mixins: [Reflux.connect(appStore, 'appData')],
  
    render: function() {
      if (!(this.state && this.state.appData)) {
        return null
      }
  
      const {patternGroups, loadedPattern, loadedPatternOptions} = this.state.appData

      return (
        <Panel className="pattern-container">
          <PatternList patternGroups={patternGroups} loadedPattern={loadedPattern}/>

          <div className="pattern-main-wrapper">
            <div className="pattern-main">   
              <PatternViewer pattern={loadedPattern}/>
              <div className="pattern-samples-wrapper">
                  <SongExamples examples={loadedPattern.examples}/>
              </div>
            </div>

            <PatternControls pattern={loadedPattern} patternOptions={loadedPatternOptions}/>
          </div>
        </Panel>
      )
    }

  })
