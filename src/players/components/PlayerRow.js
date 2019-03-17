import React from 'react'
import PropTypes from 'prop-types'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'


const PlayerRow = (props) => (
  <TableRow>
    <TableCell>
      {props.name}
    </TableCell>
    <TableCell>
      {props.position}
    </TableCell>
    <TableCell>
      {props.age}
    </TableCell>
  </TableRow>
)

PlayerRow.propTypes = {
  contractUntil: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired
}

export default PlayerRow