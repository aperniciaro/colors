import React, { Component } from 'react'
import Header from './components/Header'
import Controls from './components/Controls'
import Saved from './components/Saved'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Controls />
        <Saved />
      </>
    )
  }
}

export default App
