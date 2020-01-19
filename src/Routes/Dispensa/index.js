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

    const [disabled, setDisabled] = useState([])
    const [ingredienti, setIngredienti] = useState([])

    // Filtro Ricerca ingredienti
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    // Popup ingredienti
    const [open, setOpen] = useState(false)
    const [editMode, setEditMode] = useState(false)
    const [editId, setEditId] = useState()
    const [editName, setEditName] = useState()
    const [editQty, setEditQty] = useState()
    const [editIngredientId, setEditIngredientId] = useState()
    
    const init = () => {
        model.getDispensa()
            .then((items) => {
                setDisabled(items.map(item => item.ingredientId));
                const results = items.filter(({ingredient: {name}}) => {
                    return name.toLowerCase().includes(searchTerm.toLowerCase())
                });
                setSearchResults(results);
            })
    }
    const initDialog = () => {
        setEditId()
        setEditName()
        setEditQty()
        setEditIngredientId()
    }

    // Modifica dispensa
    const handleSaveEdit = (id, qty) => {
        model.updateDispensa(id, qty)
            .then(() => {
                init()
                setOpen(false)
                initDialog()
            }).catch((error) => {
                console.log(error)
                alert('An error occurred')
            })
    }
    const handleOpenEdit = (id, name, qty) => {
        initDialog()
        setEditMode(true)
        setEditId(id)
        setEditName(name)
        setEditQty(qty)
        setOpen(true)
    }

    // Aggiungi alla dispensa
    const handleSaveAdd = (ingredientId, qty) => {
        model.addDispensa(ingredientId, qty)
            .then(() => {
                init()
                initDialog()
                setOpen(false)
            }).catch((error) => {
                console.log(error)
                alert('An error occurred')
            })
    }
    const handleOpenAdd = () => {
        initDialog()
        setEditMode(false)
        setOpen(true)
    }

    useEffect(() => {
        init()
        model.getIngredienti()
            .then(items => {
                setIngredienti(items)
            })
    }, [searchTerm]);

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
                {searchResults.map(({id, ingredient: {name}, qty}) => {
                    console.log('item', id, name, qty)
                    return(
                        <ListItem button 
                            key={id}
                            onClick={e => handleOpenEdit(id, name, qty)}
                        >
                            <ListItemText primary={name} secondary={`${qty} g`}/>
                        </ListItem>
                    )}
                )}
            </List>
            <Fab
                color="primary" 
                aria-label="add" 
                className={classes.fabButton}
                onClick={e => handleOpenAdd()}
            >
                <AddIcon />
            </Fab>
            <IngredienteDispensa
                open={open} 
                editMode={editMode}
                ingredienti={ingredienti}
                disabled={disabled}
                id={editId}
                name={editName}
                qty={editQty}
                setQty={setEditQty}
                ingredientId={editIngredientId}
                setIngredientId={setEditIngredientId}
                onClose={e => setOpen(false)}
                handleSaveEdit={handleSaveEdit}
                handleSaveAdd={handleSaveAdd}
            />
        </Page>
    )
}
