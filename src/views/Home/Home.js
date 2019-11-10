import React, { Component } from 'react'
import { styles } from './styles'
import { withStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'
import { VideoSection, CourseTabs, TableOfContent } from './components'
import { Grid } from '@material-ui/core'

export class Home extends Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item md={12} xs={12}>
            <VideoSection />
          </Grid>
          <Grid item md={8} xs={12}>
            <CourseTabs />
          </Grid>
          <Grid item md={4} xs={12}>
            <TableOfContent />
          </Grid>
        </Grid>
      </div>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(Home)
