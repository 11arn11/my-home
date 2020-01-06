import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Dialog, DialogContent, Button, Grid } from '@material-ui/core';
import { ListItemSecondaryAction, IconButton } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import KitchenIcon from '@material-ui/icons/Kitchen';

const useStyles = makeStyles(theme => ({
  content: {
    maxHeight: '60vh'
  },
  ListItem: {
    overflow: 'auto',
    width: 220
  },
  ul: {
    padding: 0,
  }
}));

export default ({ open, onClose, missing }) => {
  const classes = useStyles()
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        Ingredienti mancanti
      </DialogTitle>
      <DialogContent>
        <Grid container
          spacing={3}
          justify="center"
        >
          <Grid item className={classes.content}>
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
                          <KitchenIcon/>
                        </IconButton>
                        <IconButton edge="end">
                          <ShoppingCartIcon/>
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              : null 
            }
          </Grid>
          <Grid item className={classes.footer}>
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
