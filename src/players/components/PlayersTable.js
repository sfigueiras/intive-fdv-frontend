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
import CircularProgress from '@material-ui/core/CircularProgress'

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
  }
}))(TableCell)

const styles = theme => ({
  table: {
    width: '100%',
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    }
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tableContainer: {
    margin: `${theme.spacing.unit * 1}px ${theme.spacing.unit * 2}px`
  }
})

const PlayersTable = (props) => {
  const { classes, players, isFetching, errorMessage } = props
  return (
    <div className={classes.container}>
      {isFetching &&
      <CircularProgress color="secondary" className="players-loading"/>
      }

      {!isFetching && !!errorMessage &&
        errorMessage
      }

      {!isFetching && !errorMessage &&
        players.length === 0 && 'No players matched your search :('}

      <Paper className={classes.tableContainer + ' players-table-container'}>
        {players.length > 0 &&
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell>
                Name
              </CustomTableCell>
              <CustomTableCell>
                Position
              </CustomTableCell>
              <CustomTableCell>
                Age
              </CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody className="players-table-body">
            {
              players.map(player =>
                <PlayerRow
                  name={player.name}
                  key={player.name}
                  age={player.age}
                  className={classes.row}
                  position={player.position}
                />
              )
            }
          </TableBody>
        </Table>
        }
      </Paper>
    </div>
  )
}

PlayersTable.propTypes = {
  classes: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  players: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  })),
  errorMessage: PropTypes.string
}

export default withStyles(styles)(PlayersTable)