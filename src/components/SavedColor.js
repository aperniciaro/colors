import React from 'react'

export default function SavedColor(props) {
  return (
    <li class="saved-color">
      <section
        className="swatch"
        style={{
          backgroundColor: `hsl(${props.savedColors[props.index].h},${
            props.savedColors[props.index].s
          }%,${props.savedColors[props.index].l}%)`
        }}
      />
      <p className="color-values">
        H: {props.savedColors[props.index].h}, S:{' '}
        {props.savedColors[props.index].s}
        %, L: {props.savedColors[props.index].l}%
      </p>
    </li>
  )
}
