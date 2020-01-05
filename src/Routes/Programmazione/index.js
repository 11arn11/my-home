import React, { useState, useEffect } from 'react'
import { Element , scroller } from 'react-scroll'

import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List'

import Page from '../../components/Page'

import GiornoListItem from './GiornoListItem'
import IngredientiMancanti from './IngredientiMancanti'

import model from '../../model'

const useStyles = makeStyles(theme => ({
  List: {
    position: 'relative',
    overflow: 'auto',
    height : 'calc(100vh - 56px)',
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
    <Page
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
    </Page>
  );
}