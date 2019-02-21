import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'

class App extends Component {
  render() {
    return (
      <>
        <h1 className="page-header">Color Selector</h1>
        <section className="active-color">
          <section className="swatch" />
          <p className="color-values">H: , S: , L: </p>
        </section>
        <section className="controls">
          <h3 className="slider-label">Hue</h3>
          <input type="range" />
          <h3 className="slider-label">Saturation</h3>
          <input type="range" />
          <h3 className="slider-label">Lightness</h3>
          <input type="range" />
          <button className="save-color">Save Color</button>
        </section>
        <section className="saved-list">
          <h2 classname="saved-list-header">Your Colors: </h2>
          <section className="saved-color">
            <section className="swatch" />
            <p className="color-values">H: , S: , L: </p>
          </section>
        </section>
      </>
    )
  }
}

export default App
