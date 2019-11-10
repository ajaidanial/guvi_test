import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative'
  },
  image: {
    width: 35,
    height: 'auto'
  },
  text: {
    position: 'absolute',
    top: 9,
    left: 8
  }
}))

/**
 * A component which renders the shield along with the `number`.
 */
export default function ShieldWithNumber(props) {
  const classes = useStyles()
  const { className, label } = props

  return (
    <div className={clsx(classes.root, className)}>
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
  className: PropTypes.any,
  label: PropTypes.string
}

ShieldWithNumber.defaultProps = {
  label: '10'
}
