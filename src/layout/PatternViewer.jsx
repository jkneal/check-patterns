import React from 'react'

import AudioPlayer from '../components/AudioPlayer'

export default ({pattern}) => {
  return (
    <div className="pattern-viewer">
      <h3>{pattern.title}</h3>
      <div className="text-muted pattern-subtitle"><pre>{pattern.subTitle}</pre></div>

      <div className="pattern-player-container">
        <div className="pattern-player">
          <AudioPlayer id={'pattern' + pattern.id} file={pattern.file}/>
        </div>
        
        <div className="pattern-score">
          <img src={pattern.score}/>
        </div>
      </div>
    </div>
  )
}
