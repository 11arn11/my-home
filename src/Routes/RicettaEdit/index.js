import React, { useState, useEffect } from 'react'

import Page from '../../components/Page'
import { Grid, TextField, Button } from '@material-ui/core'

import model from '../../model'
import { navigate } from 'gatsby'

export default ({id = null}) => {

    const [name, setName] = useState()
    const [main, setMain] = useState()
    const [secondary, setSecondary] = useState()
    const [doses, setDoses] = useState()

    const handleSave = () => {
        model.saveRicetta(id, {
            name,
            main,
            secondary
        })
        .then(() => window.history.back())
        .catch(() => alert('Si è verificato un errore'))
    }

    useEffect(() => {
        if (id) {
            model.getRicetta(id).then(item => {
                setName(item.name)
                setMain(item.main)
                setSecondary(item.secondary)
                setDoses(item.doses)
            })
        }
    }, [])

    return (
        <Page title={id ? 'Modifica ricetta' : 'Aggiungi ricetta'}>
            <Grid container 
                spacing={3}
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
                { 
                    doses 
                    ? 
                        '' 
                    : null
                }
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
        </Page>
    )
}