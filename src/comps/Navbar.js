import React from 'react';
import { AppBar, Toolbar, Typography, Box} from '@material-ui/core';
import { AddAPhoto } from '@material-ui/icons'; 
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    h1Style : {
      fontStyle: "oblique",
      fontSize: "30px",
      letterSpacing: "2px",
      fontWeight: "normal",
    },
    addAPhoto : {
        color: "#0c0629",
        fontSize: "40px",
    },
  });

const Navbar = () => {
    const classes = useStyles();
    return (
        
        <Box component="nav">
            <AppBar style={{background: "#fff"}}>
                <Toolbar>
                    <AddAPhoto className={classes.addAPhoto}/>
                    <Typography className={classes.h1Style} color="primary"> Fotogalleri</Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar;