import React from 'react';
import Answers from './Answers';
import classes from '../css/Question.module.css'

const Question = ({className}) => {
    return (
        <div className={classes.question}>
        <div className={classes.qtitle}>
          <span className="material-icons-outlined"> help_outline </span>
          Here goes the question from Learn with Sumit?
        </div>
        <Answers/>
        
      </div>
    );
};

export default Question;