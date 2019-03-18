import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PlayersTable from './PlayersTable'
import PlayersTableFilters from './PlayersTableFilters'
import { getVisiblePlayers } from '../selectors'
import { fetchPlayersIfNeeded } from '../actions'
import CircularProgress from '@material-ui/core/CircularProgress'

class PlayersContainer extends Component {
  componentDidMount () {
    this.props.dispatch(fetchPlayersIfNeeded())
  }

  render () {
    const { isFetching } = this.props
    return (
      <div>
        <PlayersTableFilters/>
        {isFetching && <CircularProgress color="secondary"/>}
        <br/>
        {!isFetching &&
        <PlayersTable
          players={this.props.players}
        />
        }
      </div>
    )
  }
}

PlayersContainer.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  players: PropTypes.arrayOf(PropTypes.shape({
    contractUntil: PropTypes.string.isRequired,
    dateOfBirth: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    nationality: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
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