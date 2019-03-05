import React from 'react'
import SavedColor from '../components/SavedColor'

export default function SavedList(props) {
  return (
    <section className="saved-list">
      <h2 className="saved-list-header">Your Colors: </h2>
      <ul>
        {props.savedColors.map((color, index) => {
          return <SavedColor savedColors={props.savedColors} index={index} />
        })}
      </ul>
    </section>
  )
}
