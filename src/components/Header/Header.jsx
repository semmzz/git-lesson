import React from "react";
import classes from './Header.module.css';
import {Link, NavLink} from "react-router-dom";

const Header = () => {
    return <header className={classes.header}>
        <Link to={''}>
            <img src={'https://upload.wikimedia.org/wikipedia/commons/2/21/VK.com-logo.svg'}/>
        </Link>
    </header>
}

export default Header;