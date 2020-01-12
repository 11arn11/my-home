import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { 
  Dialog, DialogTitle, DialogContent, 
  Button, 
  Grid, 
  List, ListItemText, ListItem, ListItemSecondaryAction, 
  IconButton 
} from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  content: {
    maxHeight: '60vh'
  },
  ListItem: {
    position: 'relative',
    overflow: 'auto',
    width: 220
  },
  ul: {
    padding: 0,
  }
}));

export default ({ open, onClose, onAddIngredient, ingredients }) => {

  const classes = useStyles()

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        Cerca ingredienti
      </DialogTitle>
      <DialogContent>
        <Grid container
          spacing={3}
          justify="center"
        >
          <Grid item>
          {ingredients
              ? 
                <List className={classes.ListItem}>
                  {ingredients.map(ingredient => (
                    <ListItem key={ingredient.id}>
                      <ListItemText
                        primary={ingredient.name} 
                      />
                      <ListItemSecondaryAction>
                        <IconButton edge="end">
                          <AddIcon color="primary" onClick={e => onAddIngredient(ingredient.id)}/>
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              : null 
            }
          </Grid>
        </Grid>
      </DialogContent>
      <DialogContent>
        <Grid container
          spacing={3}
          justify="center"
        >
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
