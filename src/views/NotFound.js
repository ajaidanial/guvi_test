import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4)
  },
  content: {
    textAlign: 'center'
  },
  image: {
    display: 'inline-block',
    maxWidth: '100%',
    width: 560
  }
}))

const NotFound = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item lg={12} xs={12}>
          <div className={classes.content}>
            <img
              alt="Under development"
              className={classes.image}
              src="/images/not-found.svg"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default NotFound
