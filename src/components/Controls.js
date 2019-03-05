import React from 'react'

export default function Controls(props) {
  const randomColor = () => {
    props.setHue(Math.floor(Math.random() * 240))
    props.setSaturation(Math.floor(Math.random() * 100))
    props.setLightness(Math.floor(Math.random() * 100))
  }
  return (
    <section className="controls">
      <h3 className="slider-label">Hue</h3>
      <input
        type="range"
        onChange={event => props.setHue(event.target.value)}
        value={props.hue}
        max="240"
      />
      <h3 className="slider-label">Saturation</h3>
      <input
        type="range"
        onChange={event => props.setSaturation(event.target.value)}
        value={props.saturation}
      />
      <h3 className="slider-label">Lightness</h3>
      <input
        type="range"
        onChange={event => props.setLightness(event.target.value)}
        value={props.lightness}
      />
      <button onClick={event => randomColor()}>Random Color</button>
      <button
        onClick={event =>
          props.setSavedColors(
            props.savedColors.concat({
              h: props.hue,
              s: props.saturation,
              l: props.lightness
            })
          )
        }
      >
        Save Color
      </button>
    </section>
  )
}
