import React, { Component } from 'react'

class App extends Component {
  state = {
    hue: 50,
    saturation: 50,
    lightness: 50,
    savedColors: []
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

  saveColor = event => {
    const color = {
      myHue: this.state.hue,
      mySaturation: this.state.saturation,
      myLightness: this.state.lightness
    }
    this.setState({
      savedColors: this.state.savedColors.concat(color)
    })
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
          <input type="range" onChange={this.changeHue} max="240" />
          <h3 className="slider-label">Saturation</h3>
          <input type="range" onChange={this.changeSaturation} />
          <h3 className="slider-label">Lightness</h3>
          <input type="range" onChange={this.changeLightness} />
          <button className="save-color" onClick={this.saveColor}>
            Save Color
          </button>
        </section>
        <section className="saved-list">
          <h2 className="saved-list-header">Your Colors: </h2>
          <ul>
            {this.state.savedColors.map(color => {
              return (
                <li class="saved-color">
                  <section
                    className="swatch"
                    style={{
                      backgroundColor: `hsl(${color.myHue},${
                        color.mySaturation
                      }%,${color.myLightness}%)`
                    }}
                  />
                  <p className="color-values">
                    H: {color.myHue}, S: {color.mySaturation}%, L:{' '}
                    {color.myLightness}%
                  </p>
                </li>
              )
            })}
          </ul>
        </section>
      </>
    )
  }
}

export default App
