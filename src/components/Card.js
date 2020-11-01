import React from 'react';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    cards: {
      padding: theme.spacing(1),
      backgroundColor: 'red',
    },
    control: {
      padding: theme.spacing(1),
    },
    paper: {
      width: 200,
      height: 200,
    },
}));

let arr = [question.correct, question.incorrect[0],question.incorrect[1],question.incorrect[2]];
    
for(let i = arr.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * i)
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

export default function Card() {
    const classes = useStyles();
    
    const [question, setQuestion] = useState(data[0]);
    const [answer, setAnswer] = useState('green');
}

const handleOnClick = () => {

}

const mapAnswers = (question) => {
    return (
      <div>
        <Grid className={classes.control} item xs={12}>
          <Card className={classes.cards}>
            <Typography gutterBottom>
              {arr[0]}
            </Typography>
          </Card>
        </Grid>
        <Grid className={classes.control} item xs={12}>
          <Card className={classes.cards}>
            <Typography gutterBottom>
              {arr[1]}
            </Typography>
          </Card>
        </Grid>
        <Grid className={classes.control} item xs={12}>
          <Card className={classes.cards}>
            <Typography gutterBottom>
              {arr[2]}
            </Typography>
          </Card>
        </Grid>
        <Grid className={classes.control} item xs={12}>
          <Card className={classes.cards}>
            <Typography gutterBottom>
              {arr[3]}
            </Typography>
          </Card>
        </Grid>
      </div>
    );
}