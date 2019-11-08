import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content'
  }
}))

const Logo = (props) => {
  const { ...rest } = props
  const classes = useStyles()

  return <div {...rest} className={classes.root}></div>
}

export default Logo
