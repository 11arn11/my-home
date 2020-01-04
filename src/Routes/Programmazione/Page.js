import React, { useState, useEffect } from 'react'
import { Element , scroller } from 'react-scroll'

import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List'

import Layout from '../../components/Layout'

import GiornoListItem from './GiornoListItem'
import IngredientiMancanti from './IngredientiMancanti'

import model from '../../model'

const useStyles = makeStyles(theme => ({
  List: {
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 600,
  }
}));

export default () => {
  const classes = useStyles()
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
  useEffect(() => {
    const skipTo = model.getProssimoPastoProgrammato();
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
        {Object.keys(model.getProgrammazione()).map(giorno => {
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