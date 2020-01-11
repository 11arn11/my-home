import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField, Dialog, DialogContent, Button, Grid } from '@material-ui/core';
import { ListItemSecondaryAction, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
}));

export default ({ open, onClose, ricette, onSelect }) => {
  const classes = useStyles()
  const setSearchTerm = () => {}
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
          <Grid item>
            <TextField 
                label="ingrediente" 
                type="search" 
                fullWidth={true}
                helperText="cerca ingrediente"
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
            {ricette && Object.keys(ricette).length 
              ? 
                <List>
                  {Object.entries(ricette).map(item => { 
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
