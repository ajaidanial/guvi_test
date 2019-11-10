export const styles = (theme) => ({
  root: {
    width: '100%'
  },
  singlePanel: {
    marginBottom: theme.spacing(1),
    '&.Mui-expanded': {
      marginBottom: theme.spacing(1),
      marginTop: theme.spacing(1)
    }
  },
  card: {
    marginBottom: theme.spacing(1),
    padding: '25px 4px',
    borderRadius: 0
  },
  heading: {
    fontWeight: 'bold'
  },
  cardContent: {
    paddingTop: 0,
    paddingBottom: 0,
    '&:last-child': {
      paddingBottom: 0
    }
  }
})
