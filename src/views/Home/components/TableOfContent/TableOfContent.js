import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { styles } from './styles'
import { SinglePanel, SinglePanelContent } from './components'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import { singlePanelData } from './data'

export default function TableOFContent() {
  const classes = makeStyles(styles)()
  // for panel options
  const [expanded, setExpanded] = React.useState('panel1')
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  const data = [
    {
      title: 'Beginner Module',
      id: 'panel1',
      children: (
        <Grid container>
          {singlePanelData.map((singleData) => (
            <SinglePanelContent
              completed={singleData.completed}
              isActive={singleData.isActive}
              isFirst={singleData.isFirst}
              isLast={singleData.isLast}
              key={singleData.id}
              label={singleData.label}
            />
          ))}
        </Grid>
      )
    },
    {
      title: 'Intermediate Module',
      id: 'panel2',
      children: <Typography>...</Typography>
    },
    {
      title: 'Advance Module',
      id: 'panel3',
      children: <Typography>...</Typography>
    },
    {
      title: 'Any One Project',
      id: 'panel4',
      children: <Typography>...</Typography>
    },
    {
      title: 'Final Assessment',
      id: 'panel5',
      children: <Typography>...</Typography>
    }
  ]

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography className={classes.heading} variant="h5">
            Table Of Content
          </Typography>
        </CardContent>
      </Card>
      {data.map((singleData) => (
        <SinglePanel
          className={classes.singlePanel}
          expanded={expanded}
          handleChange={handleChange}
          id={singleData.id}
          key={singleData.id}
          title={singleData.title}
        >
          {singleData.children}
        </SinglePanel>
      ))}
    </div>
  )
}
