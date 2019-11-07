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
  Divider,
  Typography
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { ExpandMore, Notifications } from '@material-ui/icons'
import { styles } from './styles'

const Topbar = (props) => {
  const { className, onSidebarOpen, ...rest } = props
  const classes = makeStyles(styles)()

  return (
    <AppBar {...rest} className={clsx(classes.root, className)}>
      <Toolbar>
        <div className={classes.flexGrow} />
        {/* section 1 start */}
        <img
          alt="Logo 1"
          className={clsx(classes.image2, classes.widgetSpacing)}
          src="images/thunder.png"
        />
        <Typography
          className={clsx(classes.text, classes.widgetSpacing)}
          component="h5"
          variant="h5"
        >
          1234434
        </Typography>
        {/* section 1 end */}
        {/* section 2 start */}
        <Divider className={classes.dividerHalf} orientation="vertical" />
        <img
          alt="Global Logo"
          className={clsx(classes.image2, classes.widgetSpacing)}
          src="images/global.png"
        />
        <Typography
          className={clsx(classes.text, classes.widgetSpacing)}
          component="h5"
          variant="h5"
        >
          1234434
        </Typography>
        {/* section 2 end */}
        {/* section 3 start */}
        <Divider className={classes.dividerHalf} orientation="vertical" />
        <Typography
          className={clsx(classes.text, classes.widgetSpacing)}
          component="h5"
          variant="h5"
        >
          Rank : 1234434
        </Typography>
        {/* section 3 end */}
        {/* section 4 start */}
        <Divider className={classes.dividerHalf} orientation="vertical" />
        <Typography
          className={clsx(classes.text, classes.widgetSpacing)}
          component="h5"
          variant="h5"
        >
          Level
        </Typography>
        <img
          alt="Level"
          className={clsx(classes.image2, classes.widgetSpacing)}
          src="images/number1.png"
        />
        <img
          alt="Topbar Award"
          className={clsx(classes.image2, classes.widgetSpacing)}
          src="images/award1.png"
        />
        {/* section 4 end */}
        {/* section 5 start */}
        <Divider className={classes.dividerFull} orientation="vertical" />
        <IconButton className={classes.widgetSpacing} color="inherit">
          <Notifications />
        </IconButton>
        <Avatar
          alt="Account"
          className={clsx(classes.image1, classes.widgetSpacing)}
          src="images/avatars/1.png"
        />
        <IconButton className={classes.widgetSpacing} color="inherit">
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
