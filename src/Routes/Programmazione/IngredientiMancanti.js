import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Dialog, DialogContent, Button, Grid } from '@material-ui/core';
import { ListItemSecondaryAction, IconButton } from '@material-ui/core';
import ShoppingCart from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles(theme => ({
  ListItem: {
      maxHeight: '65vh',
      overflow: 'auto'
  },
  ul: {
      padding: 0,
  }
}));

export default ({ open, onClose, missing }) => {
  const classes = useStyles()
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle id="simple-dialog-title">Ingredienti mancanti</DialogTitle>
      <DialogContent>
        <Grid container 
            spacing={3}
            justify="center"
        >
          <Grid item xs={12}>
            {missing && Object.keys(missing).length 
              ? 
                <List className={classes.ListItem}>
                  {Object.keys(missing).map(ingredient => (
                    <ListItem key={ingredient}>
                      <ListItemText 
                        primary={missing[ingredient].name} 
                        secondary={`${missing[ingredient].qta} g`}
                      />
                      <ListItemSecondaryAction>
                        <IconButton edge="end">
                          <ShoppingCart/>
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              : null 
            }
          </Grid>
          <Grid item>
            <Button 
              variant="contained" 
              color="primary"
              onClick={onClose}
            >
              Chiudi
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
