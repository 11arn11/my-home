import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import DialogTitle from '@material-ui/core/DialogTitle';
import { DialogContent, DialogContentText, Button, Grid } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
    DialogTitle: {
        textAlign: "center"
    }
}));

export default ({ 
    open, editMode,
    onClose, handleSave, 
    name = '', qta = '', 
    setName, setQta
}) => {
    const classes = useStyles()
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle className={classes.DialogTitle}>
                { name ? 'Modifica' : 'Aggiungi' }
            </DialogTitle>
            <DialogContent>
                <Grid container 
                    spacing={3}
                    justify="center"
                >
                    <Grid item xs={12}>
                        { editMode 
                        ?
                            <TextField required
                                label="ingrediente"
                                fullWidth={true}
                                helperText="inserisci il nome dell'ingrediente"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        : <DialogContentText>{name}</DialogContentText>
                        }
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            label="grammi" 
                            type="number" 
                            fullWidth={true}
                            helperText="inserisci il valore in grammi"
                            value={qta}
                            onChange={e => setQta(e.target.value)}
                        />
                    </Grid>
                    <Grid item>
                        <Button 
                            variant="contained" 
                            color="primary"
                            onClick={handleSave}
                        >
                            Salva
                        </Button>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    );
}
