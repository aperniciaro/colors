import React, { useState } from 'react'

export default function ColorPicker() {
  const [hue, setHue] = useState(50)
  const [saturation, setSaturation] = useState(50)
  const [lightness, setLightness] = useState(50)
  const [savedColors, setSavedColors] = useState([])

  // saveColor = event => {
  //   const color = {
  //     myHue: this.state.hue,
  //     mySaturation: this.state.saturation,
  //     myLightness: this.state.lightness
  //   }
  //   this.setState({
  //     savedColors: this.state.savedColors.concat(color)
  //   })
  // }

  return (
    <>
      <header>
        <h1 className="title">Color Selector</h1>
        <section className="active-color">
          <section
            className="swatch"
            style={{
              backgroundColor: `hsl(${hue},${saturation}%,${lightness}%)`
            }}
          />
          <p className="color-values">
            H: {hue}, S: {saturation}%, L: {lightness}%
          </p>
        </section>
      </header>
      <section className="controls">
        <h3 className="slider-label">Hue</h3>
        <input
          type="range"
          onChange={event => setHue(event.target.value)}
          max="240"
        />
        <h3 className="slider-label">Saturation</h3>
        <input
          type="range"
          onChange={event => setSaturation(event.target.value)}
        />
        <h3 className="slider-label">Lightness</h3>
        <input
          type="range"
          onChange={event => setLightness(event.target.value)}
        />
        <button
          className="save-color"
          onClick={event =>
            setSavedColors(
              savedColors.concat(`hsl(${hue},${saturation}%,${lightness}%)`)
            )
          }
        >
          Save Color
        </button>
      </section>
      <section className="saved-list">
        <h2 className="saved-list-header">Your Colors: </h2>
        <ul>
          {savedColors.map((color, index) => {
            return (
              <li class="saved-color">
                <section
                  className="swatch"
                  style={{
                    backgroundColor: savedColors[index]
                  }}
                />
                {/* <p className="color-values">
                  H: {hue}, S: {saturation}%, L: {lightness}%
                </p> */}
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}
