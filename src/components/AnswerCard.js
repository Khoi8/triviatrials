import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import {Typography } from '@material-ui/core';

let useStyles = correct => 
  makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    cards: {
      padding: theme.spacing(1),
      backgroundColor: correct? 'green' : 'red',
    },
    control: {
      padding: theme.spacing(1),
    },
    paper: {
      width: 200,
      height: 200,
    },
}));


export default function AnswerCard(props) {
  const [correct, setCorrect] = useState(props.props.correct);
  const [score, setScore] = useState(0);
  const classes = useStyles(correct)();

  // const handleOnClick = () => {
  //   if (correct) {
  //     setScore(score + 1);
  //     classes = useStyles(correct)();
  //   }
  //   classes = useStyles(correct)();
  // }

  console.log(correct);
  
  return (
      <Grid className={classes.control} item xs={12}>
        <Card key = {0} className={classes.cards}>
          <Typography gutterBottom>
            {props.props.answer}
          </Typography>
        </Card>
      </Grid>
  );
}
   