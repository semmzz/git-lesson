import React from "react";
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <div className={classes.nav}>
            <NavLink to={'/profile'}
                     className={({isActive}) => (
                         isActive ? classes.itemActive : classes.item
                     )}>Profile</NavLink>
            <NavLink to={'/dialogs'}
                     className={({isActive}) => (
                         isActive ? classes.itemActive : classes.item
                     )}>Messages</NavLink>
            <NavLink to={'/news'}
                     className={({isActive}) => (
                         isActive ? classes.itemActive : classes.item
                     )}>News</NavLink>
            <NavLink to={'/music'}
                     className={({isActive}) => (
                         isActive ? classes.itemActive : classes.item
                     )}>Music</NavLink>
            <NavLink to={'/settings'}
                     className={({isActive}) => (
                         isActive ? classes.itemActive : classes.item
                     )}>Settings</NavLink>
        </div>

    );
}

export default Navbar;