import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';

import moment from 'moment'

import PastoListItem from './PastoListItem'
import EmptyListItem from './EmptyListItem'

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

export default ({data, pranzo, cena, handleClick, handleClickAdd, handleClickMissing}) => {
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
                        {
                            pranzo 
                            ? 
                                <PastoListItem
                                    id={pranzo.id}
                                    main={pranzo.main} 
                                    secondary={pranzo.secondary} 
                                    missing={pranzo.missing}
                                    status={pranzo.status}
                                    handleClick={handleClick}
                                    handleClickMissing={handleClickMissing}
                                    key={`item-${data}-pranzo`}
                                    name={`item-${data}-pranzo`}
                                />
                            : 
                                <EmptyListItem 
                                    handleClickAdd={handleClickAdd}
                                />
                        }
                        {
                            pranzo
                            ? 
                                <PastoListItem 
                                    id={pranzo.id}
                                    main={cena.main} 
                                    secondary={cena.secondary} 
                                    missing={cena.missing}
                                    status={cena.status}
                                    handleClick={handleClick}
                                    handleClickMissing={handleClickMissing}
                                    key={`item-${data}-cena`}
                                    name={`item-${data}-cena`}
                                />
                            : 
                                <EmptyListItem 
                                    handleClickAdd={handleClickAdd}
                                />
                        }
                    </List>
                </ListItem>
            </ul>
        </li>
    )
}
