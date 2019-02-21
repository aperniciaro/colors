import React, { Component } from 'react'

class Saved extends Component {
  render() {
    return (
      <section className="saved-list">
        <section className="saved-color">
          <h2 className="saved-list-header">Your Colors: </h2>
          <section className="saved-color">
            <section className="swatch" />
            <p className="color-values">H: , S: , L: </p>
          </section>
        </section>
      </section>
    )
  }
}

export default Saved
