import React from 'react'
import PropTypes from 'prop-types'

const PlayerRow = (props) => (
  <tr>
    <td>
      {props.name}
    </td>
    <td>
      {props.position}
    </td>
    <td>
      {props.contractUntil}
    </td>
  </tr>
)

PlayerRow.propTypes = {
  contractUntil: PropTypes.string.isRequired,
  dateOfBirth: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired
}

export default PlayerRow