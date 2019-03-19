import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import config from '../../config'

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

const positions = config.PLAYER_POSITIONS

const PlayersTableFilters = (props) => {
  const initialState = () => ({
    name: '',
    position: '',
    age: ''
  })

  const [filters, setValues] = useState(initialState())

  const {
    classes,
    onFiltersSubmitted,
  } = props

  function handleChange (event) {
    setValues({
      ...filters,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit (event) {
    event.preventDefault()
    onFiltersSubmitted(filters)
  }

  function handleClear () {
    setValues(initialState())
  }

  useEffect(() => {
    if (JSON.stringify(filters) === JSON.stringify(initialState())) {
      onFiltersSubmitted(filters)
    }
  }, [filters])

  return (
    <div id="playersTableFilters" style={{ margin: '20px 40px' }}>
      <form onSubmit={onFiltersSubmitted}>
        <Grid container spacing={24} md={12}>
          <Grid item sm={2}>
            <TextField
              id="name"
              name="name"
              label="Name"
              value={filters.name}
              onChange={handleChange}
            />
          </Grid>

          <Grid item sm={4}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="position">Position</InputLabel>
              <Select
                value={filters.position}
                onChange={handleChange}
                inputProps={{
                  name: 'position',
                  id: 'position',
                }}>
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
              value={filters.age}
              type="number"
              onChange={handleChange}
            />
          </Grid>

          <Grid item sm={4}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Search
              <input type="submit" style={{ display: 'none' }}/>
            </Button>
            <Button className={classes.button} onClick={handleClear}>Clear</Button>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

PlayersTableFilters.propTypes = {
  onFiltersSubmitted: PropTypes.func.isRequired
}

export default withStyles(styles)(PlayersTableFilters)