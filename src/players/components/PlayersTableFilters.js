import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateFilters } from '../actions'
import { withStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  button: {
    margin: theme.spacing.unit,
  }
})

const positions = [
  '',
  'Attacking Midfield',
  'Central Midfield',
  'Centre-Back',
  'Centre-Forward',
  'Defensive Midfield',
  'Keeper',
  'Left Midfield',
  'Left Wing',
  'Left-Back',
  'Right-Back'
]

class PlayersTableFilters extends Component {
  constructor (props) {
    super(props)

    this.initialState = {
      name: '',
      position: '',
      age: ''
    }

    this.state = Object.assign({}, this.initialState)
  }

  handleSubmit () {
    this.props.dispatch(updateFilters(this.state))
  }

  handleInputChange (event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleClearClick () {
    this.setState(Object.assign({}, this.initialState))
    this.props.dispatch(updateFilters(this.initialState))
  }

  render () {
    const { classes } = this.props
    return (
      <div id="playersTableFilters" style={{ margin: '20px 40px' }}>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <Grid container spacing={24}>
            <Grid item sm={2}>
              <TextField
                id="name"
                name="name"
                label="Name"
                value={this.state.name}
                onChange={this.handleInputChange.bind(this)}
              />
            </Grid>
            <Grid item sm={4}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="position">Position</InputLabel>
                <Select
                  value={this.state.position}
                  onChange={this.handleInputChange.bind(this)}
                  inputProps={{
                    name: 'position',
                    id: 'position',
                  }}
                >
                  {
                    positions.map(position => (
                      <MenuItem key={position} value={position}>{position}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
            </Grid>
            <Grid item sm={2}>
              <TextField
                id="age"
                label="Age"
                name="age"
                value={this.state.age}
                type="number"
                onChange={this.handleInputChange.bind(this)}
              />
            </Grid>
            <Grid item sm={4}>
              <Button variant="contained" color="primary" onClick={this.handleSubmit.bind(this)}>
                Search
              </Button>
              <Button className={classes.button} onClick={this.handleClearClick.bind(this)}>Clear</Button>
            </Grid>
          </Grid>
        </form>
      </div>
    )
  }
}

PlayersTableFilters.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(withStyles(styles)(PlayersTableFilters))