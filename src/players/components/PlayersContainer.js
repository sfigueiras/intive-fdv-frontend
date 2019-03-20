import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PlayersTable from './PlayersTable'
import PlayersTableFilters from './PlayersTableFilters'
import { getVisiblePlayers } from '../selectors'
import { fetchPlayersIfNeeded, updateFilters } from '../actions'

class PlayersContainer extends Component {
  constructor (props) {
    super(props)

    this.onFiltersSubmitted = this.onFiltersSubmitted.bind(this)
  }

  componentDidMount () {
    this.props.dispatch(fetchPlayersIfNeeded())
  }

  onFiltersSubmitted (filters) {
    this.props.dispatch(updateFilters(filters))
  }

  render () {
    const { isFetching, errorMessage, players } = this.props
    return (
      <div>
        <PlayersTableFilters
          onFiltersSubmitted={this.onFiltersSubmitted}
        />
        <PlayersTable
          players={players}
          isFetching={isFetching}
          errorMessage={errorMessage}
        />
      </div>
    )
  }
}

PlayersContainer.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
  }))
}

const mapStateToProps = (state) => {
  const { players } = state
  debugger

  const {
    isFetching,
    errorMessage,
  } = ((!!players.items || !!players.errorMessage) && players) || {
    isFetching: true,
    items: players.items
  }

  return {
    players: getVisiblePlayers(state),
    isFetching,
    errorMessage
  }
}

export default connect(mapStateToProps)(PlayersContainer)