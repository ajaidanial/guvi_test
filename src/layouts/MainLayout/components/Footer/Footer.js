import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography, Link, Divider } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    paddingTop: 0
  },
  divider: {
    height: 1,
    width: '100%',
    marginBottom: theme.spacing(3)
  },
  bold: {
    fontWeight: 'bold'
  }
}))

const Footer = (props) => {
  const { ...rest } = props

  const classes = useStyles()

  return (
    <div {...rest} className={classes.root}>
      <Divider className={classes.divider} />
      <Typography variant="body1">
        &copy;{' '}
        <Link
          className={classes.bold}
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
