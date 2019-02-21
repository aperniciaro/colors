import React, { Component } from 'react'

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

  // saveColor = event => {
  //   const myHue = this.state.hue
  //   const mySaturation = this.state.saturation
  //   const myLightness = this.state.lightness
  //   return (
  //     <section className="saved-color">
  //       <section
  //         className="swatch"
  //         style={{
  //           backgroundColor: `hsl(${myHue},${mySaturation}%,${myLightness}%)`
  //         }}
  //       />
  //       <p className="color-values">
  //         H: {myhue}, S: {mySaturation}, L: {myLightness}
  //       </p>
  //     </section>
  //   )
  // }

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
          <input type="range" onChange={this.changeHue} max="240" />
          <h3 className="slider-label">Saturation</h3>
          <input type="range" onChange={this.changeSaturation} />
          <h3 className="slider-label">Lightness</h3>
          <input type="range" onChange={this.changeLightness} />
          <button className="save-color" onclick={this.saveColor}>
            Save Color
          </button>
        </section>
        <section className="saved-list">
          <section className="saved-color">
            <h2 className="saved-list-header">Your Colors: </h2>
          </section>
        </section>
      </>
    )
  }
}

export default App
