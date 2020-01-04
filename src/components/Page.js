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
  content: {
    top: 56,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
  }
}));

export default ({children, title}) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Header
          title={title}
          classes={classes}
      />
      <main className={classes.content}>
        {children}
      </main>
    </div>
  )
}
