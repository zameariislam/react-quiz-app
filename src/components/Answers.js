import React from 'react';
import classes from '../css/Answers.module.css'
import CheckBox from './CheckBox';


const Answers = () => {
    return (
        <div className={classes.answers}>
            <CheckBox className={classes.answer} text='Test answer'/>
           

        </div>
    );
};

export default Answers;