import React, {useEffect} from 'react';

import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';

import MenuIcon from '@material-ui/icons/Menu';

import { Element , scroller } from 'react-scroll'

import moment from 'moment'

import GiornoListItem from './GiornoListItem'

import store from '../../store';
const model = require('../../model');

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
  const pasti = store.programmazione;

  const skipPastMeal = (pasti) => {
    const nowDateString = moment().format("YYYY-MM-DD")
    for (const giorno in pasti){
      if (nowDateString === giorno) {
        return giorno;
      }
    if (nowDateString < giorno) {
        return giorno;
      }
    }
  }

  useEffect(() => {
    const skipTo = skipPastMeal(pasti);
    scroller.scrollTo(skipTo, {
      duration: 1800,
      delay: 900,
      containerId: 'listaDispensa',
      smooth: 'easeInOutQuart'
    })
  });

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton 
            edge="start" 
            className={classes.menuButton} 
            color="inherit" 
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Menu della settimana
          </Typography>
        </Toolbar>
      </AppBar>
      <List 
        id="listaDispensa"
        className={classes.lista} 
        subheader={<li />}
      >
        {Object.keys(pasti).map(giorno => {
          return (
            <Element
              key={giorno}
              name={giorno}
            >
              <GiornoListItem
                data={giorno}
                pranzo={model.getPastoProgrammato(giorno,'pranzo')}
                cena={model.getPastoProgrammato(giorno,'cena')}
              />
            </Element>
          )
        })}
      </List>
    </div>
  );

}