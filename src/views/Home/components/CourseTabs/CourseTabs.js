/* eslint-disable react/jsx-sort-props */
/* eslint-disable react/no-multi-comp */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { TabPanel, Notes, Summary, Activity } from './components'
import { styles } from './styles'
import { Typography } from '@material-ui/core'

// to render the necessary desc and id for the Tabs | `helper`
function a11yProps(index) {
  return {
    id: `course-tab-${index}`,
    'aria-controls': `course-tab-${index}`
  }
}

export default function CourseTabs() {
  const classes = makeStyles(styles)()
  // to take care of the tab operations
  const [openTab, setOpenTab] = React.useState(0)
  const handleChange = (event, newValue) => {
    setOpenTab(newValue)
  }

  return (
    <div className={classes.root}>
      {/* Tabs */}
      <AppBar className={classes.appBar} position="static">
        <Tabs
          className={classes.tabs}
          value={openTab}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab
            className={classes.tab}
            label={
              <Typography className={classes.bold} variant="h5">
                Notes
              </Typography>
            }
            {...a11yProps(0)}
          />
          <Tab
            className={classes.tab}
            label={
              <Typography className={classes.bold} variant="h5">
                Summary
              </Typography>
            }
            {...a11yProps(1)}
          />
          <Tab
            className={classes.tab}
            label={
              <Typography className={classes.bold} variant="h5">
                Activity
              </Typography>
            }
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>
      {/* Content */}
      <TabPanel className={classes.tabPanel} value={openTab} index={0}>
        <Notes />
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={openTab} index={1}>
        <Summary />
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={openTab} index={2}>
        <Activity />
      </TabPanel>
    </div>
  )
}
