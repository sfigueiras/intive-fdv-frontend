import React from 'react'
import * as PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

const styles = theme => ({
  title: {
    fontFamily: '\'News Cycle\', sans-serif',
    padding: `${theme.spacing.unit * 3}px`,
    margin: 0
  },
  header: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white
  }
})

const Header = (props) => {
  const { classes, title } = props
  return (
    <header className={classes.header}>
      <h1 className={classes.title}>{title}</h1>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default withStyles(styles)(Header)