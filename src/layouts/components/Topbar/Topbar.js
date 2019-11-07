import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import {
  AppBar,
  Toolbar,
  Hidden,
  IconButton,
  Avatar,
  Divider
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { ExpandMore, Notifications } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  avatar: {
    width: 45,
    height: 45
  },
  dividerFull: {
    // width: 45,
    height: 48
  },
  topbarWidgetSpacing: {}
}))

const Topbar = (props) => {
  const { className, onSidebarOpen, ...rest } = props

  const classes = useStyles()

  return (
    <AppBar {...rest} className={clsx(classes.root, className)}>
      <Toolbar>
        <div className={classes.flexGrow} />
        {/* section 5 start */}
        <Divider className={classes.dividerFull} orientation="vertical" />
        <IconButton
          className={classes.topbarWidgetSpacing}
          color="inherit"
          onClick={() => alert('notifications')}
        >
          <Notifications />
        </IconButton>
        <Avatar
          alt="Account"
          className={clsx(classes.avatar, classes.topbarWidgetSpacing)}
          onClick={() => alert('avatar')}
          src="images/avatars/1.png"
        />
        <IconButton
          className={classes.topbarWidgetSpacing}
          color="inherit"
          onClick={() => alert('dropdown')}
        >
          <ExpandMore />
        </IconButton>
        {/* section 5 end */}
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onSidebarOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  )
}

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
}

export default Topbar
