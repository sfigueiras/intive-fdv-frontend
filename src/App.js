import React, { Component } from 'react'
import { connect } from 'react-redux'
import PlayersContainer from './players/components/PlayersContainer'
import Header from './common/Header'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Header title="Football Player Finder"/>
        <PlayersContainer/>
      </div>
    )
  }
}

export default connect()(App)
