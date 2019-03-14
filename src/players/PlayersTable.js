import React from 'react'
import PlayerRow from './PlayerRow'

const PlayersTable = (props) => (
  props.players.map(player =>
    <ul>
      <PlayerRow
        name={player.name}
        contractUntil={player.contractUntil}
        dateOfBirth={player.dateOfBirth}
        nationality={player.nationality}
        position={player.position}
      />
    </ul>
  )
)

export default PlayersTable