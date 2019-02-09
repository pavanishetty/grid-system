import React, { Component } from 'react'
import './App.css'

import  InputBox  from './components/inputBoxesComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <InputBox />
        </header>
      </div>
    )
  }
}

export default App
