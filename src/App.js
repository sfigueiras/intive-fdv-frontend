import React, { Component } from 'react'
import { connect } from 'react-redux'
import PlayersContainer from './players/components/PlayersContainer'

class App extends Component {
  render () {
    return (
      <div className="App">
        <header>
          <h1>F.P.F</h1>
        </header>
        <hr/>
        <PlayersContainer/>
      </div>
    )
  }
}

export default connect()(App)
