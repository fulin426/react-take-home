import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  img: {
    width: 65,
    height: 65,
    borderRadius: 16,
  },
  title : {
    marginTop: theme.spacing(1),
    height: 28,
    fontWeight: 700,
  },
  text: {
    color: '#009330',
  }
}));

function Header({ name, iconUrl, perInstall }) {
  const classes = useStyles();

  return (
    <Box display='flex' padding={2}>
      <img className={classes.img} src={iconUrl} alt='logo'/>
      <Box ml={1}>
        <p className={classes.title}>{name}</p>
        <p className={classes.text}><span style={{fontWeight: 'bold'}}>{perInstall}</span> per install</p>
      </Box>
    </Box>
  );
}

export default Header;