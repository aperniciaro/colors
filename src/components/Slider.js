import React from 'react'

export default function Slider(props) {
  return (
    <div>
      <h3 className="slider-label">{props.name.toUpperCase()}</h3>
      <input
        className="slider"
        type="range"
        onChange={event => props.setAttribute(event.target.value)}
        value={props.value}
        max={props.max}
      />
    </div>
  )
}
