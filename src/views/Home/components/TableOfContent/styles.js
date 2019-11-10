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
    padding: '25px 20px',
    borderRadius: 0
  }
})
