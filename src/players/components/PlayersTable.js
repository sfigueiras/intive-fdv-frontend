import React from 'react'
import PlayerRow from './PlayerRow'

const PlayersTable = (props) => (
  <table>
    <thead>
    <tr>
      <th>Name</th>
      <th>Position</th>
      <th>Age</th>
    </tr>
    </thead>
    <tbody>
    {
      props.players.map(player =>

        <PlayerRow
          name={player.name}
          key={player.name}p
          contractUntil={player.contractUntil}
          dateOfBirth={player.dateOfBirth}
          nationality={player.nationality}
          position={player.position}
        />
      )
    }
    </tbody>
  </table>
)

export default PlayersTable