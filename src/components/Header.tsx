import React from 'react'
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core'
import CropDinIcon from '@material-ui/icons/CropDin';


const useStyles = makeStyles(()=> ({
    title: {
        textAlign: 'left',
        flex: 1
    }
}));

export const Header: React.FC = () => {
    const classes = useStyles();
    return (
    <AppBar position="static" color='primary'>
        <Toolbar>
            <Typography className={classes.title} variant='h5' color='secondary'>
            To do list application
            </Typography>
            <CropDinIcon />
        </Toolbar>
    </AppBar>
    )
}
