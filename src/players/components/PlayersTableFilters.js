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
  container: {
    display: 'flex',
    margin: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 10}px`,
    alignItems: 'center',
    justifyContent: 'center'
  },
  formControl: {
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  },
  select: {
    // Material UI's API doesnt provide a fullWidth props as
    // it does with the TextField element for example.
    // This is a workaround
    width: '100%'
  },
  actions: {
    textAlign: 'center'
  },
  button: {
    margin: theme.spacing.unit
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
    <div id="playersTableFilters" className={classes.container}>
      <form onSubmit={onFiltersSubmitted}>
        <Grid container
              spacing={24}>
          <Grid item xs={12} sm={4}>
            <TextField
              id="name"
              name="name"
              label="Name"
              value={filters.name}
              fullWidth={true}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <FormControl className={classes.formControl + ' ' + classes.select}>
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

          <Grid item xs={12} sm={4}>
            <TextField
              id="age"
              label="Age"
              name="age"
              value={filters.age}
              type="number"
              fullWidth={true}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} className={classes.actions}>
            <Button id="update-filters" variant="contained" color="primary" onClick={handleSubmit}>
              Search
              <input type="submit" style={{ display: 'none' }}/>
            </Button>
            <Button id="clear-filters" className={classes.button} onClick={handleClear}>Clear</Button>
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
