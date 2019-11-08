import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: `${theme.spacing(1)}px 10px`,
    position: 'relative'
  },
  image: {
    width: 40,
    height: 'auto'
  },
  text: {
    position: 'absolute',
    top: 18,
    left: 19
  }
}))

/**
 * A component which renders the shield along with the `number`.
 */
export default function ShieldWithNumber(props) {
  const classes = useStyles()
  const { label } = props

  return (
    <div className={classes.root}>
      <img
        alt="Guvi Shield"
        className={classes.image}
        src="images/shield.png"
      />
      <Typography className={classes.text}>{label}</Typography>
    </div>
  )
}

ShieldWithNumber.propTypes = {
  label: PropTypes.string
}

ShieldWithNumber.defaultProps = {
  label: '10'
}
