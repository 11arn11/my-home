import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

import '../components/layout.css'

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh'
    },
    header: {
        backgroundColor: '#FF0000',
        position: 'fixed',
        height: '9%'
    },
    content: {
        backgroundColor: '#00FF00',
        position: 'fixed',
        top: '9%',
        height: '81%'
    },
    footer: {
        backgroundColor: '#0000FF',
        position: 'fixed',
        top: '90%',
        height: '9%'
    }
}));

export default () => {
    const classes = useStyles()
    return (
        <>
            <div className={classes.root}>
                <div className={classes.header}>header</div>
                <div className={classes.content}>content</div>
                <div className={classes.footer}>footer</div>
            </div>
        </>
    )
}
