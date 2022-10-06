import React from 'react';
import classes from '../css/Nav.module.css'
import logoIcon from '../assets/images/logo-bg.png'
import Account from './Account';

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li>
                    <a href="index.html" className={classes.brand}>
                        <img src={logoIcon} alt="Learn with Sumit Logo" />
                        <h3>Learn with Sumit</h3>
                    </a>
                </li>
            </ul>
            <Account/>
        </nav>
    );
};

export default Nav;