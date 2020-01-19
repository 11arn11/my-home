import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles';

import { Grid, TextField, Button, ListItem, List, ListItemText } from '@material-ui/core'

import Page from '../../components/Page'

import CercaIngrediente from './CercaIngredienti'

import model from '../../model'

const useStyles = makeStyles(theme => ({
    List: {
      position: 'relative',
      overflow: 'auto',
      height : 'calc(100vh - 400px)',
    },
}));

export default ({id = null}) => {

    const classes = useStyles()

    const [ingredients, setIngredients] = useState([])

    const [localId, setLocalId] = useState(id)
    const [name, setName] = useState()
    const [main, setMain] = useState()
    const [secondary, setSecondary] = useState()
    const [doses, setDoses] = useState()

    const [open, setOpen] = useState(false)

    const handleOpenIngredient = () => {
        if (localId) {
            setOpen(true)
        } else {
            save().then(() => setOpen(true))
        }
    }
    const handleAddIngredient = (ingredientId) => {
        model.addIngredienteRicetta(localId, ingredientId)
            .then(() => model.getRicetta(localId))
            .then((item) => init(item))
            .then(() => setOpen(false))
            .catch(() => alert('si è verificato un errore'))
    }
    const handleCloseIngredient = () => {
        setOpen(false)
    }
    const handleSave = () => {
        save()
        .then(() => window.history.back())
        .catch(() => alert('Si è verificato un errore'))
    }
    const init = ({name, main, secondary, doses}) => {
        setName(name)
        setMain(main)
        setSecondary(secondary)
        setDoses(doses)
    }
    const save = async () => {
        model.saveRicetta(localId, {
            name,
            main,
            secondary
        }).then(res => {
            if (res && res.id) {
                setLocalId(res.id)
            }
        })
    }

    useEffect(() => {
        if (localId) {
            model.getRicetta(localId)
                .then(item => init(item))
        }
        model.getIngredienti()
            .then(items => {
                setIngredients(items)
            })
    }, [])

    return (
        <Page title={localId ? 'Modifica ricetta' : 'Aggiungi ricetta'}>
            <Grid container 
                spacing={2}
                justify="center"
            >
                <Grid item xs={12}>
                    <TextField required
                        fullWidth={true}
                        onChange={e => setName(e.target.value)}
                        helperText="inserisci il nome della ricetta"
                        value={name}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField required
                        fullWidth={true}
                        onChange={e => setMain(e.target.value)}
                        helperText="inserisci il nome dell'ingrediente principale"
                        value={main}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField required
                        fullWidth={true}
                        onChange={e => setSecondary(e.target.value)}
                        helperText="inserisci i nomi degli ingredienti secondari"
                        value={secondary}
                    />
                </Grid>
                <Grid item>
                    <Button
                        variant="contained" 
                        color="primary"
                        onClick={e => handleOpenIngredient()}
                    >
                        Aggiungi ingrediente
                    </Button>
                </Grid>
                <Grid item xs={12} className={classes.List}>
                    <List>
                        { 
                            doses 
                            ? doses.map(({id, qty, ingredient}) => 
                                <ListItem key={id} dense>
                                    <ListItemText primary={ingredient.name} secondary={`${qty} g`}/>
                                </ListItem>
                            )
                            : null
                        }
                    </List>
                </Grid>
                <Grid item>
                    <Button
                        variant="contained" 
                        color="primary"
                        onClick={e => handleSave()}
                    >
                        Salva
                    </Button>
                </Grid>
            </Grid>
            <CercaIngrediente
                open={open} 
                onClose={handleCloseIngredient}
                onAddIngredient={handleAddIngredient}
                ingredients={ingredients}
             />
        </Page>
    )
}