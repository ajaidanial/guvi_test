import React from 'react'
import { makeStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: `${theme.spacing(1)}px 10px`
  },
  image: {
    width: 40,
    height: 'auto'
  }
}))

/**
 * A component which renders the medal from the `type`.
 */
export default function Medal(props) {
  const classes = useStyles()
  const { type } = props

  let medalImage
  switch (type) {
    case 'gold':
      medalImage = 'medal_gold.png'
      break
    case 'silver':
      medalImage = 'medal_silver.png'
      break
    case 'bronze':
      medalImage = 'medal_bronze.png'
      break
    default:
      medalImage = 'medal_gold.png'
  }

  return (
    <div className={classes.root}>
      <img
        alt="Guvi Medal"
        className={classes.image}
        src={`images/${medalImage}`}
      />
    </div>
  )
}

Medal.propTypes = {
  type: PropTypes.string
}

Medal.defaultProps = {
  type: 'gold'
}
