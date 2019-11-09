/* eslint-disable react/jsx-sort-props */
/* eslint-disable react/no-multi-comp */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { TabPanel } from './components'
import { yellow } from '@material-ui/core/colors'
import { height } from '@material-ui/system'

function a11yProps(index) {
  return {
    id: `course-tab-${index}`,
    'aria-controls': `course-tab-${index}`
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'transparent'
  },
  appBar: {
    boxShadow: 'none',
    background: 'none',
    color: 'black',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
  },
  tabs: {
    '& > div': {
      '& > span': {
        backgroundColor: '#2AE88A',
        height: 4
      }
    }
  },
  tab: {
    textTransform: 'none',
    textAlign: 'left',
    padding: 0,
    minWidth: 0,
    marginRight: theme.spacing(4)
  }
}))

export default function CourseTabs() {
  const classes = useStyles()
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
          <Tab className={classes.tab} label="Notes" {...a11yProps(0)} />
          <Tab className={classes.tab} label="Summary" {...a11yProps(1)} />
          <Tab className={classes.tab} label="Activity" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      {/* Content */}
      <TabPanel value={openTab} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={openTab} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={openTab} index={2}>
        Item Three
      </TabPanel>
    </div>
  )
}
