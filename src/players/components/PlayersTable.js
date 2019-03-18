import React from 'react'
import PropTypes from 'prop-types'
import PlayerRow from './PlayerRow'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    margin: `${theme.spacing.unit * 3}px 20px 0 20px`
  },
  table: {
    width: '100%'
  },
})

const PlayersTable = (props) => {
  const { classes, players } = props
  return (
    <Paper className={classes.root + ' players-table-container'}>
      { players.length === 0 && 'No players available'}
      { players.length > 0 &&
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>
              Name
            </TableCell>
            <TableCell>
              Position
            </TableCell>
            <TableCell>
              Age
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="players-table-body">
          {
            players.map(player =>
              <PlayerRow
                name={player.name}
                key={player.name}
                age={player.age}
                position={player.position}
              />
            )
          }
        </TableBody>
      </Table>
      }
    </Paper>
  )
}

PlayersTable.propTypes = {
  classes: PropTypes.object.isRequired,
  players: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  }))
}

export default withStyles(styles)(PlayersTable)