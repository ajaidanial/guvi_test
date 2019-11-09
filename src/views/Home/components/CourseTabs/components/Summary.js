import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  headings: {
    marginBottom: theme.spacing(2)
  },
  contents: {
    lineHeight: 2
  }
}))
export default function Summary() {
  const classes = useStyles()

  return (
    <>
      <Typography className={classes.headings} variant="h5">
        Key Takeaways From This Chapter
      </Typography>
      <Typography className={classes.contents}>1. Test line 1</Typography>
      <Typography className={classes.contents}>2. Test line 2</Typography>
      <Typography className={classes.contents}>3. Test line 3</Typography>
    </>
  )
}
