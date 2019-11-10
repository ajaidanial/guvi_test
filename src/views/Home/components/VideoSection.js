import React from 'react'
import { Card, Button, CardMedia, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { Share, Bookmark } from '@material-ui/icons'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
  card: {
    width: '100%',
    height: 500
  },
  media: {
    height: '100%',
    width: '100%',
    borderRadius: 4,
    border: 0
  },
  btnContainer: {
    width: '100%',
    marginBottom: theme.spacing(2),
    textAlign: 'right'
  },
  button: {
    textTransform: 'none'
  },
  marginRight: {
    marginRight: theme.spacing(2)
  },
  bold: {
    fontWeight: 'bold'
  }
}))

export default function VideoSection() {
  const classes = useStyles()

  return (
    <>
      <div className={classes.btnContainer}>
        <Button
          className={clsx(classes.button, classes.marginRight)}
          size="large"
          startIcon={<Share />}
        >
          <Typography className={classes.bold} variant="h5">
            Share
          </Typography>
        </Button>
        <Button
          className={classes.button}
          size="large"
          startIcon={<Bookmark />}
        >
          <Typography className={classes.bold} variant="h5">
            Bookmark
          </Typography>
        </Button>
      </div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          component="iframe"
          src="https://www.youtube.com/embed/im8bi_vOP8M"
        />
      </Card>
    </>
  )
}
