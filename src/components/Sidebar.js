import React, { useState } from 'react';

import { navigate } from 'gatsby'

import { makeStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { ListItemIcon } from '@material-ui/core';

import KitchenIcon from '@material-ui/icons/Kitchen';
import ScheduleIcon from '@material-ui/icons/Schedule';

const useStyles = makeStyles(theme => ({
    IconButton: {
        marginRight: theme.spacing(2),
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
}));

export default () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false)
    const toggle = () => {
        setOpen(!open)
    }
    return (
        <>
            <IconButton 
                edge="start" 
                className={classes.IconButton} 
                color="inherit"
                onClick={toggle}
            >
                <MenuIcon />
            </IconButton>
            <SwipeableDrawer 
                open={open}
                onClose={toggle}
                onOpen={toggle}
            >
                <div className={classes.list} role="presentation">
                    <List>
                        <ListItem button 
                            key="Dispensa" 
                            onClick={e => navigate('/app/dispensa')}
                        >
                            <ListItemIcon>
                                <KitchenIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Dispensa" />
                        </ListItem>
                        <ListItem button 
                            key="Programmazione" 
                            onClick={e => navigate('/app/programmazione')}
                        >
                            <ListItemIcon>
                                <ScheduleIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Programmazione" />
                        </ListItem>
                    </List>
                </div>
            </SwipeableDrawer>
        </>
    );
}