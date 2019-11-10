/* eslint-disable react/no-multi-comp */
import React from 'react'
import { Grid, Typography, Divider, SvgIcon } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 0,
    margin: 0,
    width: '100%'
  },
  item1: {
    padding: 0,
    margin: 0,
    width: '100%',
    position: 'relative'
  },
  item2: {
    padding: theme.spacing(2, 0),
    margin: 0,
    width: '100%',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
  },
  divider: {
    height: '100%',
    width: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
    position: 'absolute',
    top: 0,
    marginLeft: '-2px'
  },
  icon: {
    position: 'absolute',
    top: '50%',
    marginLeft: '-13px',
    marginTop: '-13px',
    zIndex: 1000,
    backgroundColor: 'white'
  },
  iconGreen: {
    color: '#2AE88A'
  },
  iconDefault: {
    color: 'rgba(0, 0, 0, 0.12)'
  },
  text: {}
}))

function TickIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </SvgIcon>
  )
}

export default function SinglePanelContent() {
  const classes = useStyles()

  return (
    <Grid className={classes.container} container>
      <Grid className={classes.item1} item md={1} xs={1}>
        <TickIcon className={clsx(classes.icon, classes.iconDefault)} />
        <Divider className={classes.divider} />
      </Grid>
      <Grid className={classes.item2} item md={11} xs={11}>
        <Typography className={classes.text}>Test, what and why</Typography>
      </Grid>
    </Grid>
  )
}
