import React from 'react';
 import classes from '../css/Illustration.module.css'
 import logInImage from '../assets/images/login.svg'

const Illustration = () => {
    return (
        <div className={classes.illustration}>
            <img src={logInImage} alt="Login" />
          </div>
    );
};

export default Illustration;