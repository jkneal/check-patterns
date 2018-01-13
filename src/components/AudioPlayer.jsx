import React from 'react'
import ReactAudioPlayer from 'react-audio-player';

export default React.createClass({

  componentDidMount: function() {
    this.gaplessPlayer = new Gapless5(this.props.id + '-player', {
      loop: true, 
      tracks: [this.props.file], 
      mapKeys: {cue: "1", playpause: "2", stop: "3"}
    })
  },

  render: function() {
    const {id} = this.props
    return (
      <div id={id + '-player'}></div>
    )
  }

})