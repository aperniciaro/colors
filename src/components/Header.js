import React, { Component } from 'react'

class Header extends Component {
  state = {
    hue: 50,
    saturation: 50,
    lightness: 50
  }

  render() {
    return (
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
    )
  }
}

export default Header
