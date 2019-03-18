import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PlayersTable from './PlayersTable'
import PlayersTableFilters from './PlayersTableFilters'
import { getVisiblePlayers } from '../selectors'
import { fetchPlayersIfNeeded } from '../actions'

class PlayersContainer extends Component {
  componentDidMount () {
    this.props.dispatch(fetchPlayersIfNeeded())
  }

  render () {
    const { isFetching, players } = this.props
    return (
      <div>
        <PlayersTableFilters/>
        <br/>
        <PlayersTable
          players={players}
          isFetching={isFetching}
        />
      </div>
    )
  }
}

PlayersContainer.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  players: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
  }))
}

const mapStateToProps = (state) => {
  const { players } = state
  const {
    isFetching,
  } = (players.items && players) || {
    isFetching: true,
    items: players.items,
  }
  return {
    players: getVisiblePlayers(state),
    isFetching
  }
}

export default connect(mapStateToProps)(PlayersContainer)