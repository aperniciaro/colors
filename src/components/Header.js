import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header>
        <h1 className="title">Color Selector</h1>
        <section className="active-color">
          <section className="swatch" />
          <p className="color-values">H: , S: , L: </p>
        </section>
      </header>
    )
  }
}

export default Header
