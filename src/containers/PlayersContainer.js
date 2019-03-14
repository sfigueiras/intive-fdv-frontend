import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PlayersTable from '../players/PlayersTable'
import { fetchPlayersIfNeeded } from '../actions'

class PlayersContainer extends Component {
  constructor (props) {
    super(props)
    this.componentDidMount.bind(this)
  }

  componentDidMount () {
    const { dispatch } = this.props
    dispatch(fetchPlayersIfNeeded({}))
  }

  render () {
    const { isFetching } = this.props
    return (
      <div>
        {isFetching && 'loading'}
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
  const { criteria, visiblePlayers } = state
  const {
    isFetching,
    items: players
  } = (visiblePlayers.items && visiblePlayers) || {
    isFetching: true,
    items: visiblePlayers.items,
    criteria: {}
  }

  return {
    criteria,
    players,
    isFetching
  }
}

export default connect(mapStateToProps)(PlayersContainer)