import React, { useState } from 'react'
import Header from '../components/Header'
import Controls from '../components/Controls'
import SavedList from '../components/SavedList'

export default function ColorPicker() {
  const [hue, setHue] = useState(Math.floor(Math.random() * 240))
  const [saturation, setSaturation] = useState(Math.floor(Math.random() * 100))
  const [lightness, setLightness] = useState(Math.floor(Math.random() * 100))
  const [savedColors, setSavedColors] = useState([])

  return (
    <>
      <Header hue={hue} saturation={saturation} lightness={lightness} />
      <Controls
        hue={hue}
        saturation={saturation}
        lightness={lightness}
        savedColors={savedColors}
        setHue={setHue}
        setSaturation={setSaturation}
        setLightness={setLightness}
        setSavedColors={setSavedColors}
      />
      <SavedList savedColors={savedColors} />
    </>
  )
}
