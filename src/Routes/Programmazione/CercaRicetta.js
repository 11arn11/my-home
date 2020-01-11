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

  const items = Object.entries(ricette)

  // Filtro Ricerca ingredienti
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
      const results = items.filter(item => {
          const ricetta = item[1]
          const main = ricetta.main.toLowerCase()
          const secondary = ricetta.secondary.toLowerCase()
          return main.includes(searchTerm.toLowerCase()) || secondary.includes(searchTerm.toLowerCase())
      });
      setSearchResults(results);
      console.log(results)
  }, [searchTerm]);

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
                  { searchResults.map(item => { 
                    const id = item[0]
                    const ricetta = item[1]
                    return (
                      <ListItem key={id}>
                        <ListItemText 
                          primary={ricetta.main} 
                          secondary={ricetta.secondary}
                        />
                        <ListItemSecondaryAction>
                          <IconButton edge="end" onClick={onSelect}>
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
