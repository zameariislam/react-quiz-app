import React from 'react';
import classes from '../css/Form.module.css'



const Form = ({ children, className, ...res }) => {
    return (
        <form className={ `${className} ${classes.form}`} action="#" {...res}>

            {children}



        </form>
    );
};

export default Form;