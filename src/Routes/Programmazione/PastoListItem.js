import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';

import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

import Avatar from '@material-ui/core/Avatar';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import ShoppingCart from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles(theme => ({
    ListItem: {
        backgroundColor: theme.palette.background.lime,
    },
    ul: {
        padding: 0,
    }
}));

export default ({pasto: {recipe: {id, name, main, secondary, missing = [], status = false}}, handleClick, handleClickMissing}) => {
    const classes = useStyles();
    return (
        <ListItem 
            button 
            className={classes.ListItem}
            onClick={e => handleClick(id)}
        >
            <ListItemAvatar>
                <Avatar>
                    <FastfoodIcon color="primary"/>
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={name}
                secondary={main + ', ' + secondary}
            />
            <ListItemSecondaryAction>
                {status
                    ? 
                        null
                    :   
                        <IconButton edge="end" onClick={e => handleClickMissing(e, missing)}>
                            <ShoppingCart color="primary"/>
                        </IconButton>
                }
            </ListItemSecondaryAction>
        </ListItem>
    )
}
