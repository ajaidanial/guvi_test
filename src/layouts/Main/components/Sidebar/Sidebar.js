import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { Divider, Drawer } from '@material-ui/core'
// Icons for the sidebar
import AlarmOutlined from '@material-ui/icons/AlarmOutlined'
import MonetizationOnOutlined from '@material-ui/icons/MonetizationOnOutlined'
import HomeOutlined from '@material-ui/icons/HomeOutlined'
import SettingsOutlined from '@material-ui/icons/SettingsOutlined'
import AssignmentTurnedInOutlined from '@material-ui/icons/AssignmentTurnedInOutlined'

import { Profile, SidebarNav } from './components'

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}))

const Sidebar = (props) => {
  const { open, variant, onClose, className, ...rest } = props

  const classes = useStyles()

  const pages = [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: <HomeOutlined />
    },
    {
      title: 'Transactions',
      href: '/transactions',
      icon: <MonetizationOnOutlined />
    },
    {
      title: 'Tasks',
      href: '/tasks',
      icon: <AssignmentTurnedInOutlined />
    },
    {
      title: 'Reminders',
      href: '/reminders',
      icon: <AlarmOutlined />
    },
    {
      title: 'Settings',
      href: '/settings',
      icon: <SettingsOutlined />
    }
  ]

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div {...rest} className={clsx(classes.root, className)}>
        <Profile />
        <Divider className={classes.divider} />
        <SidebarNav className={classes.nav} pages={pages} />
      </div>
    </Drawer>
  )
}

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
}

export default Sidebar
