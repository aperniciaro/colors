import React from 'react'
import Slider from '../components/Slider'

export default function Controls(props) {
  const randomColor = () => {
    props.setHue(Math.floor(Math.random() * 240))
    props.setSaturation(Math.floor(Math.random() * 100))
    props.setLightness(Math.floor(Math.random() * 100))
  }
  const addSavedColor = () => {
    props.setSavedColors(
      props.savedColors.concat({
        h: props.hue,
        s: props.saturation,
        l: props.lightness
      })
    )
  }
  return (
    <section className="controls">
      <Slider
        name="hue"
        max="240"
        value={props.hue}
        setAttribute={props.setHue}
      />
      <Slider
        name="saturation"
        max="100"
        value={props.saturation}
        setAttribute={props.setSaturation}
      />
      <Slider
        name="lightness"
        max="100"
        value={props.lightness}
        setAttribute={props.setLightness}
      />
      <button onClick={event => randomColor()}>Random Color</button>
      <button onClick={event => addSavedColor()}>Save Color</button>
    </section>
  )
}
