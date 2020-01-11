import React from "react"

import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Sidebar from './Sidebar'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default ({ title, onClickMenu }) => {

  const classes = useStyles();

  const goBack = () => {
    window.history.back()
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Sidebar/>
          <Typography variant="h6" className={classes.title}>
            { title }
          </Typography>
          <Button onClick={goBack} color="inherit">Back</Button>
        </Toolbar>
      </AppBar>  
    </div>  
  )
}
