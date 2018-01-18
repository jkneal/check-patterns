import React from 'react'

export default ({pattern}) => {
  return (
    <div className="pattern-viewer">
      <h3>{pattern.titlePrefix} {pattern.title}</h3>
      <div className="text-muted pattern-subtitle"><pre>{pattern.subTitle}</pre></div>
      <img src={pattern.score}/>
    </div>
  )
}
