import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField'

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

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
    },
    grow: {
        flexGrow: 1,
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: 530,
        right: 10,
        margin: '0 auto',
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
            return name.toLowerCase().includes(searchTerm.toLowerCase())
        });
        setSearchResults(results);
    }, [searchTerm]);

    // Popup ingredienti
    const [open, setOpen] = useState(false)
    const [dialogName, setDialogName] = useState()
    const [dialogQta, setDialogQta] = useState()
    const handleSave = () => {
        setDialogName()
        setDialogQta()
        setOpen(false)
    }
    const handleAdd = () => {
        setDialogName()
        setDialogQta()
        setOpen(true)
    }
    const handleEdit = (ingredientId) => {
        setDialogName(model.getIngrediente(ingredientId).name)
        setDialogQta(model.getIngredienteDispensa(ingredientId))
        setOpen(true)
    }

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
            <Fab
                color="primary" 
                aria-label="add" 
                className={classes.fabButton}
                onClick={e => handleAdd()}
            >
                <AddIcon />
            </Fab>
            <div className={classes.grow} />
            <IngredienteDispensa 
                open={open} 
                onClose={e => setOpen(false)}
                name={dialogName}
                qta={dialogQta}
                setName={setDialogName}
                setQta={setDialogQta}
                handleSave={handleSave}
            />
        </Page>
    )
}
