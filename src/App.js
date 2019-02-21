import React, { Component } from 'react'
// import Header from './components/Header'
// import Controls from './components/Controls'
// import Saved from './components/Saved'

class App extends Component {
  state = {
    hue: 50,
    saturation: 50,
    lightness: 50
  }

  changeHue = event => {
    this.setState({ hue: event.target.value })
  }

  changeSaturation = event => {
    this.setState({ saturation: event.target.value })
  }

  changeLightness = event => {
    this.setState({ lightness: event.target.value })
  }

  render() {
    return (
      <>
        <header>
          <h1 className="title">Color Selector</h1>
          <section className="active-color">
            <section
              className="swatch"
              style={{
                backgroundColor: `hsl(${this.state.hue},${
                  this.state.saturation
                }%,${this.state.lightness}%)`
              }}
            />
            <p className="color-values">
              H: {this.state.hue}, S: {this.state.saturation}%, L:{' '}
              {this.state.lightness}%
            </p>
          </section>
        </header>
        <section className="controls">
          <h3 className="slider-label">Hue</h3>
          <input type="range" onChange={this.changeHue} />
          <h3 className="slider-label">Saturation</h3>
          <input type="range" onChange={this.changeSaturation} />
          <h3 className="slider-label">Lightness</h3>
          <input type="range" onChange={this.changeLightness} />
          <button className="save-color">Save Color</button>
        </section>
        <section className="saved-list">
          <section className="saved-color">
            <h2 className="saved-list-header">Your Colors: </h2>
            <section className="saved-color">
              <section className="swatch" />
              <p className="color-values">H: , S: , L: </p>
            </section>
          </section>
        </section>
      </>
    )
  }
}

export default App
