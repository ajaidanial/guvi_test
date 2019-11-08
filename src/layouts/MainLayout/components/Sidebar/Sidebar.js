import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { Drawer } from '@material-ui/core'
// Icons for the sidebar
import {
  AlarmOutlined,
  MonetizationOnOutlined,
  HomeOutlined,
  SettingsOutlined,
  AssignmentTurnedInOutlined,
  PhoneInTalkSharp,
  CastForEducation,
  Android,
  InsertPhoto
} from '@material-ui/icons'
import { Logo, SidebarNav } from './components'

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 100,
    height: '100%',
    border: 'none',
    boxShadow:
      'rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px'
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  }
}))

const Sidebar = (props) => {
  const { open, variant, onClose, ...rest } = props
  const classes = useStyles()
  const pages = [
    {
      title: 'Home',
      href: '/home',
      icon: <HomeOutlined />
    },
    {
      title: 'Test 1',
      href: '/t1',
      icon: <MonetizationOnOutlined />
    },
    {
      title: 'Test 2',
      href: '/t2',
      icon: <AssignmentTurnedInOutlined />
    },
    {
      title: 'Test 3',
      href: '/t3',
      icon: <AlarmOutlined />
    },
    {
      title: 'Test 4',
      href: '/t4',
      icon: <PhoneInTalkSharp />
    },
    {
      title: 'Test 5',
      href: '/t5',
      icon: <CastForEducation />
    },
    {
      title: 'Test 6',
      href: '/t6',
      icon: <Android />
    },
    {
      title: 'Test 7',
      href: '/t7',
      icon: <InsertPhoto />
    },
    {
      title: 'Test 8',
      href: '/t8',
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
      <div {...rest} className={classes.root}>
        <Logo />
        <SidebarNav pages={pages} />
      </div>
    </Drawer>
  )
}

Sidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
}

export default Sidebar
