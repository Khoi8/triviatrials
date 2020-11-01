import { Button } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Apercu-Mono',
      'monospace'
    ].join(','),
  },
});

const useStyles = makeStyles({
  button: {
      backgroundColor: '#AD8034',
      color: '#FFFF',
      display: 'flex',  
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20,
  },
  root: {
    display: 'flex',  
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#FFF4E6',
  },
  title: {
    display: 'flex',  
    justifyContent: 'center',
  }
});

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <ThemeProvider theme = {theme}>
          <Typography variant="h1" gutterBottom className={classes.title}> Triviatrials </Typography>
        </ThemeProvider>
      </div>
      <Button variant = 'contained' className={classes.button}> Start game </Button>
    </div>
  );
}