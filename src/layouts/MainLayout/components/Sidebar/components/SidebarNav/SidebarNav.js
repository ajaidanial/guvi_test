/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { forwardRef } from 'react'
import { NavLink as RouterLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { List, ListItem, Button, colors } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {},
  item: {
    display: 'flex',
    paddingTop: 4,
    paddingBottom: 4
  },
  button: {
    color: colors.blueGrey[800],
    padding: '10px 8px',
    justifyContent: 'flex-center',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightMedium,
    borderLeft: '6px solid transparent',
    borderRight: '6px solid transparent',
    borderRadius: 0
  },
  icon: {
    color: theme.palette.icon,
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center'
  },
  active: {
    color: theme.palette.primary.main,
    borderLeft: `6px solid ${theme.palette.primary.main}`,
    fontWeight: theme.typography.fontWeightMedium,
    '& $icon': {
      color: theme.palette.primary.main
    }
  }
}))

const CustomRouterLink = forwardRef((props, ref) => (
  <div ref={ref} style={{ flexGrow: 1 }}>
    <RouterLink {...props} />
  </div>
))

const SidebarNav = (props) => {
  const { pages, ...rest } = props
  const classes = useStyles()

  return (
    <List {...rest} className={classes.root}>
      {pages.map((page) => (
        <ListItem className={classes.item} disableGutters key={page.title}>
          <Button
            activeClassName={classes.active}
            className={classes.button}
            component={CustomRouterLink}
            to={page.href}
          >
            <div className={classes.icon}>{page.icon}</div>
          </Button>
        </ListItem>
      ))}
    </List>
  )
}

SidebarNav.propTypes = {
  pages: PropTypes.array.isRequired
}

export default SidebarNav
