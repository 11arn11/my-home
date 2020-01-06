import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import ListItem from '@material-ui/core/ListItem';

import ControlPointIcon from '@material-ui/icons/ControlPoint';
import { ListItemIcon } from '@material-ui/core';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    ListItem: {
        verticalAlign: 'middle',
        display: 'inline-flex'
    }
}));

export default ({handleClickAdd}) => {
    const classes = useStyles();
    return (
        <ListItem 
            button 
            className={classes.ListItem}
            alignItems="center"
            onClick={e => handleClickAdd(e)}
            justify="center"
        >
            <Grid container justify="center">
                <Grid item>
                    <ControlPointIcon />
                </Grid>
            </Grid>
        </ListItem>
    )
}
