import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

export default ({ open, onClose, missing }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle id="simple-dialog-title">Ingredienti mancanti</DialogTitle>
      {missing && Object.keys(missing).length 
        ? 
          <List>
            {Object.keys(missing).map(ingredient => (
              <ListItem key={ingredient}>
                <ListItemText 
                  primary={missing[ingredient].name} 
                  secondary={`${missing[ingredient].qta} g`}
                />
              </ListItem>
            ))}
          </List>
        : null 
      }
    </Dialog>
  );
}
