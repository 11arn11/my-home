import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';

import Pasto from './Pasto'

const useStyles = makeStyles(theme => ({
    li: {
    },
    ul: {
        padding: 0,
    },
    ListSubheader: {
        backgroundColor: theme.palette.background.paper,
    },
}));

export default ({data, pranzo, cena}) => {
    const classes = useStyles();
    return (
        <li key={`section-${data}`} className={classes.li}>
            <ul className={classes.ul}>
                <ListSubheader className={classes.ListSubheader}>
                    {data}
                </ListSubheader>
                <ListItem >
                    <List>
                        <Pasto pasto={pranzo} key={`item-${data}-pranzo`}/>
                        <Pasto pasto={cena} key={`item-${data}-cena`}/>
                    </List>
                </ListItem>
            </ul>
        </li>
    )
}
