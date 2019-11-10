import React from 'react'
import { Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  textField: {
    width: '100%'
  },
  button: {
    textTransform: 'none'
  },
  btnContainer: {
    width: '100%',
    padding: 0,
    textAlign: 'right'
  },
  text: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  }
}))

export default function Activity() {
  const classes = useStyles()

  return (
    <>
      <div className={classes.btnContainer}>
        <Button className={classes.button} color="primary" variant="text">
          <Typography>View All Qestions</Typography>
        </Button>
      </div>
      <Typography className={classes.text} variant="h5">
        Q1. Test content here...
      </Typography>
      <div className={classes.btnContainer}>
        <Button className={classes.button} color="primary" variant="contained">
          <Typography>Next</Typography>
        </Button>
      </div>
    </>
  )
}
