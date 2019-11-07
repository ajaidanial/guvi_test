import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { Avatar, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content'
  },
  avatar: {
    width: 100,
    height: 100
  },
  name: {
    marginTop: theme.spacing(1)
  }
}))

const Profile = (props) => {
  const { className, ...rest } = props
  // get the stored data to show in sidebar
  const { username, first_name, last_name } = JSON.parse(
    localStorage.getItem('user_data')
  )
  const classes = useStyles()

  const user = {
    name: `${first_name} ${last_name}`,
    avatar: '/images/avatars/avatar_11.png',
    username: username
  }

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Avatar
        alt="Person"
        className={classes.avatar}
        component={RouterLink}
        src={user.avatar}
        to="/settings"
      />
      <Typography className={classes.name} variant="h4">
        {user.name}
      </Typography>
      <Typography variant="body2">{user.username}</Typography>
    </div>
  )
}

Profile.propTypes = {
  className: PropTypes.string
}

export default Profile
