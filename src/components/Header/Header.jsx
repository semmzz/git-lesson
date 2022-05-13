import React from "react";
import classes from './Header.module.css';
import {NavLink} from 'react-router-dom';
//comment
const Header = () => {
    return (
        <header className={classes.header}>
            <NavLink to={''}>
                <img src={'https://upload.wikimedia.org/wikipedia/commons/2/21/VK.com-logo.svg'}/>
            </NavLink>
        </header>
    )
}

export default Header;