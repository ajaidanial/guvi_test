import React from 'react'
import { TextField, Button, Typography } from '@material-ui/core'
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
    marginTop: theme.spacing(3),
    textAlign: 'right'
  },
  bold: {
    fontWeight: 'bold'
  }
}))

export default function Notes() {
  const classes = useStyles()

  return (
    <>
      <TextField
        className={classes.textField}
        label="Add your notes..."
        multiline
        rows="15"
        variant="outlined"
      />

      <div className={classes.btnContainer}>
        <Button className={classes.button} color="primary" variant="contained">
          <Typography className={classes.bold}>Save</Typography>
        </Button>
      </div>
    </>
  )
}
