import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: `${theme.spacing(1)}px 10px`
  },
  image: {
    width: 40,
    height: 'auto',
    padding: theme.spacing(0, 1)
  },
  header: {
    padding: theme.spacing(0, 1)
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
  const { imgAlt, header, imgSrc, label, onlyText } = props

  if (!onlyText)
    return (
      <div className={classes.root}>
        <img alt={imgAlt} className={classes.image} src={imgSrc} />
        <Typography className={classes.text}>{label}</Typography>
      </div>
    )
  else
    return (
      <div className={classes.root}>
        <Typography className={classes.header}>{header} :</Typography>
        <Typography className={classes.text}>{label}</Typography>
      </div>
    )
}

IconWithLabel.propTypes = {
  imgAlt: PropTypes.string,
  imgSrc: PropTypes.string,
  label: PropTypes.string.isRequired,
  onlyText: PropTypes.bool
}

IconWithLabel.defaultProps = {
  onlyText: false
}
