import React, { useState } from 'react'

export default function ColorPicker() {
  const [hue, setHue] = useState(Math.floor(Math.random() * 240))
  const [saturation, setSaturation] = useState(Math.floor(Math.random() * 100))
  const [lightness, setLightness] = useState(Math.floor(Math.random() * 100))
  const [savedColors, setSavedColors] = useState([])

  const randomColor = () => {
    setHue(Math.floor(Math.random() * 240))
    setSaturation(Math.floor(Math.random() * 100))
    setLightness(Math.floor(Math.random() * 100))
  }

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
          value={hue}
          max="240"
        />
        <h3 className="slider-label">Saturation</h3>
        <input
          type="range"
          onChange={event => setSaturation(event.target.value)}
          value={saturation}
        />
        <h3 className="slider-label">Lightness</h3>
        <input
          type="range"
          onChange={event => setLightness(event.target.value)}
          value={lightness}
        />
        <button onClick={event => randomColor()}>Random Color</button>
        <button
          onClick={event =>
            setSavedColors(
              savedColors.concat({ h: hue, s: saturation, l: lightness })
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
                    backgroundColor: `hsl(${savedColors[index].h},${
                      savedColors[index].s
                    }%,${savedColors[index].l}%)`
                  }}
                />
                <p className="color-values">
                  H: {savedColors[index].h}, S: {savedColors[index].s}%, L:{' '}
                  {savedColors[index].l}%
                </p>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}
