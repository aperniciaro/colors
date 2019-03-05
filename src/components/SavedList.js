import React from 'react'

export default function SavedList(props) {
  return (
    <section className="saved-list">
      <h2 className="saved-list-header">Your Colors: </h2>
      <ul>
        {props.savedColors.map((color, index) => {
          return (
            <li class="saved-color">
              <section
                className="swatch"
                style={{
                  backgroundColor: `hsl(${props.savedColors[index].h},${
                    props.savedColors[index].s
                  }%,${props.savedColors[index].l}%)`
                }}
              />
              <p className="color-values">
                H: {props.savedColors[index].h}, S: {props.savedColors[index].s}
                %, L: {props.savedColors[index].l}%
              </p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
