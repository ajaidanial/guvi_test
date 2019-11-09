import React, { Component } from 'react'
import { styles } from './styles'
import { withStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'

export class Home extends Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <div>Home</div>
      </div>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(Home)
