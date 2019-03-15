import React from 'react'
import PlayerRow from './PlayerRow'

const PlayersTable = (props) => (
  <table>
    <thead>
    <tr>
      <th colSpan="4">Name</th>
      <th colSpan="4">Position</th>
      <th colSpan="4">Contract Until</th>
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