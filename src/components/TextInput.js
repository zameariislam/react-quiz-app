import React from 'react';
import classes from '../css/Textinput.module.css'

const TextInput = ({icon,...res}) => {
    return (
        <div className={classes.textInput}>
              <input {...res} />
              <span className="material-icons-outlined"> {icon} </span>
            </div>
    );
};

export default TextInput;