import React from 'react'

export default function Header(props) {
  return (
    <header>
      <h1 className="title">Color Selector</h1>
      <section className="active-color">
        <section
          className="swatch"
          style={{
            backgroundColor: `hsl(${props.hue},${props.saturation}%,${
              props.lightness
            }%)`
          }}
        />
        <p className="color-values">
          H: {props.hue}, S: {props.saturation}%, L: {props.lightness}%
        </p>
      </section>
    </header>
  )
}
