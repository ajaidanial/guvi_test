export const styles = (theme) => ({
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
    // '&.Mui-selected > span > h5': {
    //   color: 'red'
    // },
    // '& > span > h5': {
    //   color: 'pink'
    // }
  },
  tabPanel: {
    background: 'white',
    marginTop: theme.spacing(3),
    boxShadow:
      '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
    borderRadius: 4
  },
  bold: {
    fontWeight: 'bold'
  }
})
