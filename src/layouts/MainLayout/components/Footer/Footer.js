import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography, Link } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4)
  }
}))

const Footer = (props) => {
  const { ...rest } = props

  const classes = useStyles()

  return (
    <div {...rest} className={classes.root}>
      <Typography variant="body1">
        &copy;{' '}
        <Link
          component="a"
          href="https://ajaidanial.github.io/"
          target="_blank"
        >
          Ajai Danial
        </Link>
        {` ${new Date().getFullYear()}`}
      </Typography>
      <Typography variant="caption">Coded with love.</Typography>
    </div>
  )
}

export default Footer
