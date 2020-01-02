import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';

import MenuIcon from '@material-ui/icons/Menu';

import Giorno from './Giorno'

const store = require('../../store');

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  lista: {
    top: 56,
    overflow: 'auto',
    maxHeight: 600,
  }
}));

export default () => {
  const classes = useStyles();
  const pasti = store.pasti;
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Pasti
          </Typography>
        </Toolbar>
      </AppBar>
      <List 
        className={classes.lista} 
        subheader={<li />}
      >
        {Object.keys(pasti).map(giorno => (
          <Giorno
            data={giorno}
            pranzo={pasti[giorno].pranzo}
            cena={pasti[giorno].cena}
          /> 
        ))}
      </List>
    </div>
  );

}