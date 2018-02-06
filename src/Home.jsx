import React from 'react'
import Reflux from 'reflux'
import {Panel} from 'react-bootstrap'
import MediaQuery from 'react-responsive'

import appStore from './app-store'

import PatternList from './layout/PatternList'
import PatternListMobile from './layout/PatternListMobile'
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
          <MediaQuery minWidth={620}>
            <PatternList patternGroups={patternGroups} loadedPattern={loadedPattern}/>
          </MediaQuery>

          <MediaQuery maxWidth={620}>
            <PatternListMobile patternGroups={patternGroups} loadedPattern={loadedPattern}/>
          </MediaQuery>

          <div className="pattern-main-wrapper">
            <div className="pattern-main">   
              <PatternViewer pattern={loadedPattern}/>
              <MediaQuery minWidth={850}>
                <div className="pattern-samples-wrapper">
                    <SongExamples examples={loadedPattern.examples}/>
                </div>
              </MediaQuery>
            </div>

            <PatternControls pattern={loadedPattern} patternOptions={loadedPatternOptions}/>

            <MediaQuery maxWidth={850}>
                <div className="pattern-samples-wrapper-bottom">
                    <SongExamples examples={loadedPattern.examples}/>
                </div>
            </MediaQuery>
          </div>
        </Panel>
      )
    }

  })
