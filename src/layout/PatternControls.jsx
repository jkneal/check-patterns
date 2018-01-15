import React from 'react'

import AudioPlayer from '../components/AudioPlayer'
import TempoControl from '../components/TempoControl'

export default React.createClass({

  getClickInterval: function() {
    const bpm = this.props.patternOptions.tempo
    const bps = bpm / 60
    return Math.round(1000 / bps)
  },

  onPlay: function() {
    this.showClickVisual()
    const interval = this.getClickInterval()
    this.clickInterval = setInterval(this.showClickVisual, interval)
  },

  onStop: function() {
    clearInterval(this.clickInterval)
  },

  showClickVisual: function() {
    $('#play-visual').css('background-color', '#DB923B')
    const hideInterval = Math.round(this.getClickInterval() / 2)
    setTimeout(this.hideClickVisual, hideInterval)
  },

  hideClickVisual: function() {
    $('#play-visual').css('background-color', 'white')
  },

  render: function() {
    const {pattern, patternOptions} = this.props

    return (
      <div className="pattern-controls">
        <div className="pattern-tempo">
          <TempoControl tempo={patternOptions.tempo}/>
        </div>
        <div className="pattern-player">
          <AudioPlayer id="pattern-player" file={pattern.file} addButtonLabels={true}
            onplay={this.onPlay} onstop={this.onStop}/>
        </div>
      </div>
    )
  }
})
