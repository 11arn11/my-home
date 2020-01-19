import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField, Dialog, DialogContent, Button, Grid } from '@material-ui/core';
import { ListItemSecondaryAction, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  fullWidth: {
    width: '100%'
  }
}));

export default ({ open, onClose, ricette, onSelect }) => {

  const classes = useStyles()

  // Filtro Ricerca ingredienti
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    const results = ricette.filter(ricetta => {
      const searchKey = searchTerm.toLowerCase()
      const name = ricetta.name.toLowerCase()
      const main = ricetta.main.toLowerCase()
      const secondary = ricetta.secondary.toLowerCase()
      return main.includes(searchKey) || secondary.includes(searchKey) || name.includes(searchKey)
    });
    setSearchResults(results);
  }, [ricette, searchTerm]);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        Cerca Ricetta
      </DialogTitle>

      <DialogContent>
        <Grid container
          spacing={3}
          justify="center"
        >
          <Grid item className={classes.fullWidth}>
            <TextField 
                label="ricetta" 
                type="search" 
                fullWidth={true}
                helperText="cerca ricetta"
                onChange={e => setSearchTerm(e.target.value)}
              />
          </Grid>
        </Grid>
      </DialogContent>

      <DialogContent>
        <Grid container
          spacing={3}
          justify="center"
        >
          <Grid item>
            {searchResults && searchResults.length 
              ? 
                <List>
                  { searchResults.map(({id, name, main, secondary }) => { 
                    return (
                      <ListItem key={id}>
                        <ListItemText 
                          primary={name} 
                          secondary={`${main}, ${secondary}`}
                        />
                        <ListItemSecondaryAction>
                          <IconButton edge="end" onClick={e => onSelect(id)}>
                            <AddIcon color="primary"/>
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    )
                  })}
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
          <Grid item className={classes.content}>
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
