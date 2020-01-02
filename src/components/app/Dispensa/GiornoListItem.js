import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';

import moment from 'moment'

import PastoListItem from './PastoListItem'

const useStyles = makeStyles(theme => ({
    ul: {
        padding: 0,
    },
    ListSubheader: {
        backgroundColor: theme.palette.background.paper,
    },
    List: {
        width: '100%'
    }
}));

export default ({data, pranzo, cena}) => {
    const classes = useStyles();
    const formatDate = (data) => {
        return moment(data).locale('ll').format("dddd (DD MMMM)")
    }
    return (
        <li key={`section-${data}`} className={classes.li}>
            <ul className={classes.ul}>
                <ListSubheader className={classes.ListSubheader}>
                    {formatDate(data)}
                </ListSubheader>
                <ListItem>
                    <List className={classes.List}>
                        <PastoListItem
                            main={pranzo.main} 
                            secondary={pranzo.secondary} 
                            status={pranzo.status}
                            key={`item-${data}-pranzo`}
                            name={`item-${data}-pranzo`}
                        />
                        <PastoListItem 
                            main={cena.main} 
                            secondary={cena.secondary} 
                            status={cena.status}
                            key={`item-${data}-cena`}
                            name={`item-${data}-cena`}
                        />
                    </List>
                </ListItem>
            </ul>
        </li>
    )
}
