import React from 'react'
import { Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content',
    paddingTop: 10,
    paddingBottom: 10
  },
  logo: {
    width: 45,
    height: 45
  }
}))

const Logo = (props) => {
  const { ...rest } = props
  const classes = useStyles()

  return (
    <div {...rest} className={classes.root}>
      <Avatar alt="Guvi Logo" className={classes.logo} src="images/logo.png" />
    </div>
  )
}

export default Logo
