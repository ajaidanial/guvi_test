import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { AppBar, Toolbar, Hidden, IconButton, Divider } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { IconWithLabel } from '../../../../components'
import { styles } from './styles'

const Topbar = (props) => {
  const { onSidebarOpen, ...rest } = props
  const classes = makeStyles(styles)()

  return (
    <AppBar className={classes.root} color="white" {...rest}>
      <Toolbar>
        <div className={classes.flexGrow} />
        {/* TODO: Topbar contents here */}
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
