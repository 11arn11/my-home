import React from "react"

import { makeStyles } from '@material-ui/core/styles';

import Header from "./Header"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  Header: {
    position: 'relative',
    top: 0,
  },
  main: {
    position: 'relative',
    top: 56,
    height : 'calc(100vh - 70px)',
    maxHeight: 'calc(100vh - 70px)',
    backgroundColor: theme.palette.background.lime,
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
    </div>
  )
}
