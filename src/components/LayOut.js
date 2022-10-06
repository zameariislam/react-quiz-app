import React from 'react';
import Nav from './Nav';
import classes from '../css/LayOut.module.css'

const LayOut = ({children}) => {
    return (
        <div>
            <Nav/>
            <main className={classes.main}>
                <div className={classes.container}>
                    {children}
                </div>
            </main>

            
        </div>
    );
};

export default LayOut;