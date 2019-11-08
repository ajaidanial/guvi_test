import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    width: 35,
    height: 'auto',
    paddingRight: theme.spacing(1)
  },
  header: {
    paddingRight: theme.spacing(1)
  },
  text: {}
}))

/**
 * A component which renders:
 *    1. an image to a label.
 *    2. an header to a label.
 * Works based on onlyText.
 */
export default function IconWithLabel(props) {
  const classes = useStyles()
  const { className, imgAlt, header, imgSrc, label, onlyText } = props

  if (!onlyText)
    return (
      <div className={clsx(classes.root, className)}>
        <img alt={imgAlt} className={classes.image} src={imgSrc} />
        <Typography className={classes.text}>{label}</Typography>
      </div>
    )
  else
    return (
      <div className={clsx(classes.root, className)}>
        <Typography className={classes.header}>{header} :</Typography>
        <Typography className={classes.text}>{label}</Typography>
      </div>
    )
}

IconWithLabel.propTypes = {
  className: PropTypes.any,
  imgAlt: PropTypes.string,
  imgSrc: PropTypes.string,
  label: PropTypes.string.isRequired,
  onlyText: PropTypes.bool
}

IconWithLabel.defaultProps = {
  onlyText: false
}
