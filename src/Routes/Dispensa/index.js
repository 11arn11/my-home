import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField'

import Page from '../../components/Page'

import IngredienteDispensa from './IngredienteDispensa'

import model from '../../model'

const useStyles = makeStyles(theme => ({
    TextField: {
        width: '100%'
    },
    List: {
      position: 'relative',
      overflow: 'auto',
      maxHeight: 600,
    }
}));

export default () => {

    const classes = useStyles()

    // Filtro Ricerca ingredienti
    const dispensa = Object.entries(model.getDispensa())
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    useEffect(() => {
        const results = dispensa.filter(ingrediente => {
            const id = ingrediente[0]
            const name = model.getIngrediente(id).name
            return name.toLowerCase().includes(searchTerm)
        });
        setSearchResults(results);
    }, [searchTerm]);

    // Popup modifica ingredienti
    const [editingIngredient, setEditingIngredient] = useState()
    const handleEdit = (ingredientId) => setEditingIngredient(ingredientId)
    const handleClose = () => setEditingIngredient()

    return (
        <Page title="Dispensa">
            <TextField 
                label="ingrediente" 
                type="search" 
                fullWidth={true}
                helperText="cerca ingrediente"
                onChange={e => setSearchTerm(e.target.value)}
            />
            <List className={classes.List}>
                {searchResults.map(item => {
                    const id = item[0]
                    const qta = item[1]
                    const name = model.getIngrediente(id).name
                    return(
                        <ListItem button 
                            key={id}
                            onClick={e => handleEdit(id)}
                        >
                            <ListItemText primary={name} secondary={`${qta} g`}/>
                        </ListItem>
                    )}
                )}
            </List>
            <IngredienteDispensa 
                open={!!editingIngredient} 
                onClose={handleClose}
                editingIngredient={editingIngredient}
            />
        </Page>
    )
}
