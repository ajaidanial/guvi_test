import React from 'react'
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
import { KeyboardArrowDown, Notifications } from '@material-ui/icons'
import { styles } from './styles'
import clsx from 'clsx'
// custom components
import { Medal, ShieldWithNumber, IconWithLabel } from '../../../../components'

const Topbar = (props) => {
  const { onSidebarOpen, ...rest } = props
  const classes = makeStyles(styles)()

  return (
    <AppBar className={classes.root} color="white" {...rest}>
      <Toolbar>
        <div className={classes.flexGrow} />

        {/* section 1 start */}
        <IconWithLabel
          imgAlt="Thunder Logo"
          imgSrc="images/thunder.png"
          label="122"
        />

        {/* section 2 start */}
        <Divider className={clsx(classes.dividerHalf, classes.widgetMargin)} />
        <IconWithLabel
          className={classes.widgetMargin}
          imgAlt="Global Logo"
          imgSrc="images/global.png"
          label="123485"
        />

        {/* section 3 start */}
        <Divider className={clsx(classes.dividerHalf, classes.widgetMargin)} />
        <IconWithLabel
          className={classes.widgetMargin}
          header="Rank"
          label="1233233"
          onlyText
        />

        {/* section 4 start */}
        <Divider className={clsx(classes.dividerHalf, classes.widgetMargin)} />
        <Typography className={classes.widgetMargin}>Level</Typography>
        <ShieldWithNumber className={classes.widgetMargin} />
        <Medal className={classes.widgetMargin} />

        {/* section 5 start */}
        <Divider className={clsx(classes.dividerFull, classes.widgetMargin)} />
        <IconButton className={classes.widgetMargin} size="small">
          <Notifications />
        </IconButton>
        <Avatar
          alt="Avatar"
          className={clsx(classes.avatar, classes.widgetMargin)}
          src="images/avatar.png"
        />
        <IconButton className={classes.widgetMargin} size="small">
          <KeyboardArrowDown />
        </IconButton>

        {/* for smaller screens | toggler button */}
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
  onSidebarOpen: PropTypes.func
}

export default Topbar
