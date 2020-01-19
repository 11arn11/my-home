import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import DialogTitle from '@material-ui/core/DialogTitle';
import { DialogContent, DialogContentText, Button, Grid } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles(theme => ({
    DialogTitle: {
        textAlign: "center"
    }
}));

export default ({ 
    editMode, open, ingredienti, disabled,
    id, name, qty, ingredientId,
    onClose, 
    handleSaveEdit, handleSaveAdd, 
    setIngredientId, setQty
}) => {

    const classes = useStyles()

    const save = () => {
        if (editMode) {
            handleSaveEdit(id, qty)
        } else {
            handleSaveAdd(ingredientId, qty)
        }
    }

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle className={classes.DialogTitle}>
                { editMode ? 'Modifica' : 'Aggiungi' }
            </DialogTitle>
            <DialogContent>
                <Grid container 
                    spacing={3}
                    justify="center"
                >
                    <Grid item xs={12}>
                        { !editMode 
                        ?
                            <Autocomplete
                                options={ingredienti}
                                getOptionLabel={option => option.name + '('+option.id+')'}
                                getOptionDisabled={option => disabled.includes(option.id)}
                                onChange={(e, item) => setIngredientId(item.id)}
                                renderInput={params => (
                                    <TextField {...params} label="Ingrediente" variant="outlined" fullWidth />
                                )}
                            />
                        : <DialogContentText>{name}</DialogContentText>
                        }
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            type="number" 
                            label="grammi" 
                            fullWidth={true}
                            helperText="inserisci il valore in grammi"
                            value={qty}
                            onChange={e => setQty(e.target.value)}
                        />
                    </Grid>
                    <Grid item>
                        <Button 
                            variant="contained" 
                            color="primary"
                            onClick={e => save()}
                        >
                            Salva
                        </Button>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    );
}
