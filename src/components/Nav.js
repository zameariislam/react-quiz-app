import React from 'react';
import classes from '../css/Nav.module.css'
import logoIcon from '../assets/images/logo-bg.png'
import Account from './Account';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li>
                    <Link to='/' className={classes.brand}>
                        <img src={logoIcon} alt="Learn with Sumit Logo" />
                        <h3>Learn with Sumit</h3>
                    </Link>
                </li>
            </ul>
            <Account/>
        </nav>
    );
};

export default Nav;