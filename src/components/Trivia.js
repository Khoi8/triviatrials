import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AnswerCard from './AnswerCard'
import Paper from '@material-ui/core/Paper';

let data = require('../api/Apprentice_TandemFor400_Data.json');

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const randomize = (arr) => {
  for(let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

export default function Triva() {
  const classes = useStyles();
  randomize(data);
  const [question, setQuestion] = useState(data[0]);

  let props = [
    {
      answer: question.correct, 
      correct: true,
    },
    {
      answer: question.incorrect[0],
      correct: false,
    },
    {
      answer: question.incorrect[1],
      correct: false,
    },
    {
      answer: question.incorrect[2],
      correct: false,
    }
  ];

  randomize(props)

  console.log(props[0]);

  return(
    <Grid container className={classes.root} spacing={2}>
        <AnswerCard props = {props[0]}/>
        <AnswerCard props = {props[1]}/>
        <AnswerCard props = {props[2]}/>
        <AnswerCard props = {props[3]}/>
    </Grid>
  );
}
