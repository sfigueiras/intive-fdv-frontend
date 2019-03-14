import React from 'react'
import PropTypes from 'prop-types'

const PlayerRow = (props) => (
  <li>
    {props.name}
  </li>
)

PlayerRow.propTypes = {
  contractUntil: PropTypes.string.isRequired,
  dateOfBirth: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired
}

export default PlayerRow