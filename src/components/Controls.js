import React, { Component } from 'react'

class Controls extends Component {
  render() {
    return (
      <section className="controls">
        <h3 className="slider-label">Hue</h3>
        <input type="range" />
        <h3 className="slider-label">Saturation</h3>
        <input type="range" />
        <h3 className="slider-label">Lightness</h3>
        <input type="range" />
        <button className="save-color">Save Color</button>
      </section>
    )
  }
}

export default Controls
