import React from 'react';

import DialogTitle from '@material-ui/core/DialogTitle';
import { DialogContent, DialogContentText } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';

import model from '../../model'

export default ({ open, onClose, editingIngredient }) => {
    const qta = model.getIngredienteDispensa(editingIngredient)
    const name = model.getIngrediente(editingIngredient).name
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Aggiorna dispensa</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {qta} g di {name}
                </DialogContentText>
            </DialogContent>
        </Dialog>
  );
}
