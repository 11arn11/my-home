import React, { useState, useEffect } from 'react'
import { Element , scroller, Events } from 'react-scroll'
import moment from 'moment'

import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List'

import Layout from '../../components/Layout'

import GiornoListItem from './GiornoListItem'
import IngredientiMancanti from './IngredientiMancanti'

import store from '../../store'
import model from '../../model'

const useStyles = makeStyles(theme => ({
  List: {
    position: 'relative',
  }
}));

export default () => {
  const classes = useStyles()
  const pasti = store.programmazione
  const [open, setOpen] = useState(false)
  const [missingDialog, setMissingDialog] = useState()
  const handleClick = (e, id) => {
    alert('handleClick (' + id + ')')
  };
  const handleClickMissing = (e, missing) => {
    setOpen(true)
    setMissingDialog(missing)
  };
  const handleCloseMissing = () => {
    setOpen(false)
  };
  const skipPastMeal = (pasti) => {
    const nowDateString = moment().format("YYYY-MM-DD")
    for (const giorno in pasti){
      if (nowDateString === giorno) {
        return giorno
      }
    if (nowDateString < giorno) {
        return giorno
      }
    }
  }
  useEffect(() => {
    const skipTo = skipPastMeal(pasti);

    Events.scrollEvent.register('begin', function(to, element) { console.log("begin", arguments); });
    Events.scrollEvent.register('end', function(to, element) { console.log("end", arguments); });

    scroller.scrollTo(skipTo, {
      duration: 1800,
      delay: 900,
      containerId: 'listaDispensa',
      smooth: 'easeInOutQuart'
    })
  });
  return (
    <Layout
      title="Menu della settimana"
    >
      <List 
        id="listaDispensa"
        className={classes.List} 
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
                handleClick={handleClick}
                handleClickMissing={handleClickMissing}
              />
            </Element>
          )
        })}
      </List>
      <IngredientiMancanti 
        open={open} 
        onClose={handleCloseMissing}
        missing={missingDialog}
      />
    </Layout>
  );
}