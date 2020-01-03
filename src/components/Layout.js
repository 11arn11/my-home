import React from "react"

import { makeStyles } from '@material-ui/core/styles';

import Header from "./header"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  content: {
    top: 56,
    position: 'fixed',
    overflow: 'auto',
    maxHeight: 600,
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
