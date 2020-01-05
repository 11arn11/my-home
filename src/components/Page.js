import React from "react"

import { makeStyles } from '@material-ui/core/styles';

import Header from "./Header"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: '99%',
    maxHeight: '99%',
    minHeight: '99%',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  Header: {
    position: 'fixed',
    top: 0,
    height: '9%'
  },
  main: {
    position: 'fixed',
    top: '8%',
    height: '92%',
    width: '100%',
  }
}));

export default ({children, title}) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Header
          title={title}
          className={classes.Header}
          classes={classes}
      />
      <main className={classes.main}>
        {children}
      </main>
      <footer>fine</footer>
    </div>
  )
}
