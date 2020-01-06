import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Dialog, DialogContent, Button, Grid } from '@material-ui/core';
import { ListItemSecondaryAction, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  content: {
    maxHeight: '60vh'
  },
  ListItem: {
    position: 'relative',
    overflow: 'auto',
    width: 220,
    height : 'calc(100vh - 156px)',
  },
  ul: {
    padding: 0,
  }
}));

export default ({ open, onClose, ricette, onSelect }) => {
  const classes = useStyles()
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
          <Grid item className={classes.content}>
            {ricette && Object.keys(ricette).length 
              ? 
                <List className={classes.ListItem}>
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
