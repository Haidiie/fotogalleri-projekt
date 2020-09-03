import React from 'react';
import { Typography } from '@material-ui/core' 
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  h2Style : {
    fontFamily: "Arial Black, Gadget, sans-serif",
    textAlign: "center",
    marginTop: "100px",
    fontSize: "45px",
  },
  pStyle : {
    textAlign: "center",
    fontFamily: "Verdana, Geneva, sans-serif",
  },
});

const Title = () => {
  const classes = useStyles();
  return (
    <div className="title">
      <Typography className={classes.h2Style} color="secondary">Mina Bilder</Typography>
      <Typography className={classes.pStyle}>Ladda upp foton</Typography>
    </div>
  )
}

export default Title;