import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';

import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

import Avatar from '@material-ui/core/Avatar';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import Done from '@material-ui/icons/Done';
import ShoppingCart from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles(theme => ({
    ul: {
        padding: 0,
    }
}));

export default ({main, secondary, status}) => {
    const classes = useStyles();
    return (
        <ListItem className={classes.ListItem}>
            <ListItemAvatar>
                <Avatar>
                    <FastfoodIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={main}
                secondary={secondary}
            />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                    {status ? <Done /> : <ShoppingCart/>}
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}
