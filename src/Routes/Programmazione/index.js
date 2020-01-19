import React, { useState, useEffect } from 'react'
import { Element , scroller } from 'react-scroll'

import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List'

import Page from '../../components/Page'

import GiornoListItem from './GiornoListItem'
import IngredientiMancanti from './IngredientiMancanti'
import CercaRicetta from './CercaRicetta'

import model from '../../model'
import { navigate } from 'gatsby';

const useStyles = makeStyles(theme => ({
  List: {
    position: 'relative',
    overflow: 'auto',
    height : 'calc(100vh - 56px)',
  }
}));

export default () => {
  const classes = useStyles()
  const [currentDate, setCurrentDate] = useState()
  const [currentOccasion, setCurrentOccasion] = useState()
  const [open, setOpen] = useState(false)
  const [openCercaRicetta, setOpenCercaRicetta] = useState(false)
  const [missingDialog, setMissingDialog] = useState()

  const [programmazione, setProgrammazione] = useState([])
  const [ricette, setRicette] = useState([])

  const init = () => {
    model.getProgrammazione().then(items => {
      console.log(items)
      setProgrammazione(items)
    })
  }

  // Vai a ricetta
  const handleClick = (id) => {
    navigate(`/app/ricetta/${id}`)
}

  // Cerca ricetta
  const handleClickAdd = (date, occasion) => {
    setCurrentDate(date)
    setCurrentOccasion(occasion)
    setOpenCercaRicetta(true)
  }
  const handleSelectRicetta = (recipeId) => {
    console.log('handleSelectRicetta', currentDate, currentOccasion, recipeId)
    model.addProgrammazione(currentDate, currentOccasion, recipeId)
      .then(() => {
        init()
        handleCloseCercaRicetta()
      })
      .catch( (error) => {
        console.log(error)
        handleCloseCercaRicetta()
        alert('An error occurred')
      })
  }
  const handleCloseCercaRicetta = () => {
    setCurrentDate()
    setCurrentOccasion()
    setOpenCercaRicetta(false)
  }

  // Vedi Ingredienti Mancanti
  const handleClickMissing = (e, missing) => {
    setOpen(true)
    setMissingDialog(missing)
  }
  const handleCloseMissing = () => {
    setOpen(false)
  }

  useEffect(() => {
    init()
    model.getRicette().then(items => setRicette(items))
    const skipTo = model.getProssimoPastoProgrammato();
    scroller.scrollTo(skipTo, {
      duration: 1800,
      delay: 900,
      containerId: 'listaDispensa',
      smooth: 'easeInOutQuart'
    })

  }, [])
  return (
    <Page
      title="Menu della settimana"
    >
      <List 
        id="listaDispensa"
        className={classes.List} 
        subheader={<li />}
      >
        {programmazione.map(({date, pranzo, cena}) => {
          return (
            <Element
              key={date}
              name={date}
            >
              <GiornoListItem
                data={date}
                pranzo={pranzo}
                cena={cena}
                handleClick={handleClick}
                handleClickAdd={handleClickAdd}
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
      <CercaRicetta
        open={openCercaRicetta} 
        onClose={handleCloseCercaRicetta}
        onSelect={handleSelectRicetta}
        ricette={ricette}
      />
    </Page>
  );
}