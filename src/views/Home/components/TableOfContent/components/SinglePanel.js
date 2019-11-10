import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  ExpansionPanelDetails,
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  heading: {
    fontWeight: 'bold'
  },
  expansionPanelSummary: {
    padding: '4px 20px',
    '&.Mui-expanded': {
      borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
    }
  }
}))

export function SinglePanel(props) {
  const classes = useStyles()
  const { className, children, expanded, handleChange, id, title } = props

  return (
    <ExpansionPanel
      className={className}
      expanded={expanded === id}
      onChange={handleChange(id)}
    >
      <ExpansionPanelSummary
        className={classes.expansionPanelSummary}
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography className={classes.heading} variant="h6">
          {title}
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>{children}</ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

SinglePanel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.object,
  expanded: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default SinglePanel
