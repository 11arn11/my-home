import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField'

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import Page from '../../components/Page'

import model from '../../model'

const useStyles = makeStyles(theme => ({
    TextField: {
        width: '100%'
    },
    List: {
      position: 'relative',
      overflow: 'auto',
      height : 'calc(100vh - 125px)',
    },
    grow: {
        flexGrow: 1,
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        bottom : 20,
        right: 15,
        margin: '0 auto',
    }
}));

export default () => {

    const classes = useStyles()

    // Filtro Ricerca ingredienti
    const items = Object.entries(model.getPasti())
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    useEffect(() => {
        const results = items.filter(item => {            
            const searchKey = searchTerm.toLowerCase()
            const main = item[1].main || ''
            const secondary = item[1].secondary || ''
            return main.toLowerCase().includes(searchKey) || secondary.toLowerCase().includes(searchKey)
        });
        setSearchResults(results);
    }, [searchTerm]);

    const handleAdd = () => {
        alert('Aggiungi pasto')
    }
    const handleEdit = () => {
        alert('Modifica pasto')
    }

    return (
        <Page title="Ricette">
            <TextField 
                label="Ricette" 
                type="search" 
                fullWidth={true}
                helperText="cerca ricetta"
                onChange={e => setSearchTerm(e.target.value)}
            />
            <List className={classes.List}>
                {searchResults.map(item => {
                    const id = item[0]
                    const pasto = item[1]
                    return(
                        <ListItem button 
                            key={id}
                            onClick={e => handleEdit(id)}
                        >
                            <ListItemText primary={pasto.main} secondary={pasto.secondary}/>
                        </ListItem>
                    )}
                )}
            </List>
            <Fab
                color="primary" 
                aria-label="add" 
                className={classes.fabButton}
                onClick={e => handleAdd()}
            >
                <AddIcon />
            </Fab>
        </Page>
    )
}
