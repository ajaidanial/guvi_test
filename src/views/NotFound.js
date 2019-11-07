import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    height: '100%'
  },
  content: {
    textAlign: 'center'
  },
  image: {
    marginTop: 20,
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
            <Typography variant="h1">
              404: The page you are looking for isn’t here
            </Typography>
            <Typography variant="subtitle2">
              You either tried some shady route or you came here by mistake.
              Whichever it is, try using the navigation
            </Typography>
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
