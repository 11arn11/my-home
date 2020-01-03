import React from "react"

import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  IconButton: {
    marginRight: theme.spacing(2),
  }
}));

export default ({ title }) => {
  const classes = useStyles()
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton 
          edge="start" 
          className={classes.IconButton} 
          color="inherit" 
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">
          { title }
        </Typography>
      </Toolbar>
    </AppBar>  
  )
}
