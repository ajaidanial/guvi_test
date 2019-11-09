import React, { Component } from 'react'
import { styles } from './styles'
import { withStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'
import { VideoSection } from './components'

export class Home extends Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <VideoSection />
      </div>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(Home)
