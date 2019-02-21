import React, { Component } from 'react'
import Header from './components/Header'
import Controls from './components/Controls'
import Saved from './components/Saved'

class App extends Component {
  render() {
    return (
      <>
        <header>
          <h1 className="title">Color Selector</h1>
          <section className="active-color">
            <section className="swatch" />
            <p className="color-values">H: , S: , L: </p>
          </section>
        </header>
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
