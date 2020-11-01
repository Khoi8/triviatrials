import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { InputLabel, Typography } from '@material-ui/core';


let data = require('../api/Apprentice_TandemFor400_Data.json');

export default function Triva() {
  const classes = useStyles();
  
  const [question, setQuestion] = useState(data[0]);
  const [answer, setAnswer] = useState('green');
  const [score, setScore] = useState(0);


  let arr = [question.correct, question.incorrect[0],question.incorrect[1],question.incorrect[2]];
    
  for(let i = arr.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * i)
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }

  return(
    <Grid container className={classes.root} spacing={2}>
        {mapAnswers(answer)}
    </Grid>
  );
}
