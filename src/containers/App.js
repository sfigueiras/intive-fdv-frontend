import React, { Component } from 'react'
import '../App.css'
import { connect } from 'react-redux'
import PlayersContainer from './PlayersContainer'

class App extends Component {
  render () {
    return (
      <div className="App">
        <header>
          <h1>Football Player Finder</h1>
        </header>
        <hr/>
        <PlayersContainer/>
      </div>
    )
  }
}

export default connect()(App)
