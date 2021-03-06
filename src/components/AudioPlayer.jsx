import React from 'react'
import ReactAudioPlayer from 'react-audio-player';

export default React.createClass({

  componentDidMount: function() {
    this.constructPlayer(this.props)
  },

  componentWillReceiveProps: function(nextProps) {
    if (this.props.file != nextProps.file) {
      this.constructPlayer(nextProps)
    }
  },

  componentWillUnmount: function() {
    const playerPlaying = this.gaplessPlayer && this.gaplessPlayer.isPlaying()
    if (playerPlaying) {
      this.gaplessPlayer.stop()
    }
  },

  constructPlayer: function(props) {
    const playerPlaying = this.gaplessPlayer && this.gaplessPlayer.isPlaying()
    if (playerPlaying) {
      this.gaplessPlayer.stop()
    }

    this.gaplessPlayer = new Gapless5(props.id, {
      loop: true, 
      tracks: [props.file], 
      mapKeys: {cue: "1", playpause: "2", stop: "3"},
      addButtonLabels: props.addButtonLabels
    })

    this.gaplessPlayer.onplay = e => {
      $(document).trigger('gapless:play', [props.id])
      if (props.onplay) {
        props.onplay(e)
      }  
    }

    $(document).on('gapless:play', (e, playerId) => {
      if (playerId !== props.id && this.gaplessPlayer.isPlaying()) {
        this.gaplessPlayer.stop()
      }
    })

    if (props.onstop) {
      this.gaplessPlayer.onstop = props.onstop
    }

    if (playerPlaying) {
      this.gaplessPlayer.play()
    }
  },

  render: function() {
    const {id} = this.props
    return (
      <div id={id}></div>
    )
  }

})