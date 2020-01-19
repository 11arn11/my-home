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
                            pranzo.recipe 
                            ? 
                                <PastoListItem
                                    pasto={pranzo}
                                    handleClick={handleClick}
                                    handleClickMissing={handleClickMissing}
                                    key={`item-${data}-pranzo`}
                                    name={`item-${data}-pranzo`}
                                />
                            : 
                                <EmptyListItem 
                                    pasto={pranzo}
                                    handleClickAdd={handleClickAdd}
                                />
                        }
                        {
                            cena.recipe
                            ? 
                                <PastoListItem 
                                    pasto={cena}
                                    handleClick={handleClick}
                                    handleClickMissing={handleClickMissing}
                                    key={`item-${data}-cena`}
                                    name={`item-${data}-cena`}
                                />
                            : 
                                <EmptyListItem 
                                    pasto={cena}
                                    handleClickAdd={handleClickAdd}
                                />
                        }
                    </List>
                </ListItem>
            </ul>
        </li>
    )
}
