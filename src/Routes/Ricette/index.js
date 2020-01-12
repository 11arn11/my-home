import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField'

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

import Page from '../../components/Page'

import model from '../../model'
import { ListItemSecondaryAction } from '@material-ui/core';
import { navigate } from 'gatsby';

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
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleAdd = () => {
        navigate(`/app/ricetta/add`)
    }
    const handleEdit = (id) => {
        navigate(`/app/ricetta/${id}/edit`)
    }
    const handleView = (id) => {
        navigate(`/app/ricetta/${id}`)
    }

    useEffect(() => {
        model.getRicette().then(items => {
            const results = items.filter(item => {            
                const searchKey = searchTerm.toLowerCase()
                const main = item.main || ''
                const secondary = item.secondary || ''
                return main.toLowerCase().includes(searchKey) || secondary.toLowerCase().includes(searchKey)
            });
            setSearchResults(results);    
        })
    }, [searchTerm]);

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
                {searchResults.map(({id, name, main, secondary}) => {
                    return(
                        <ListItem button 
                            key={id}
                            onClick={e => handleView(id)}
                        >
                            <ListItemText primary={name} secondary={`${main}, ${secondary}`}/>
                            <ListItemSecondaryAction>
                                <EditIcon onClick={e => handleEdit(id)}/>
                            </ListItemSecondaryAction>
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
