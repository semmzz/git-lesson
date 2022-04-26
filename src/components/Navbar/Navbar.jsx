import React from "react";
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={classes.nav}>
            <div>
                <NavLink to={'/profile'}
                         className={({isActive}) => (
                             isActive
                                 ? classes.itemActive
                                 : classes.item
                         )}>Profile</NavLink>
            </div>
            <div>
                <NavLink to={'/dialogs'}
                         className={({isActive}) => (
                             isActive
                                 ? classes.itemActive
                                 : classes.item
                         )}>Messages</NavLink>
            </div>
            <div>
                <NavLink to={'/news'}
                         className={({isActive}) => (
                             isActive
                                 ? classes.itemActive
                                 : classes.item
                         )}>News</NavLink>
            </div>
            <div>
                <NavLink to={'/music'}
                         className={({isActive}) => (
                             isActive
                                 ? classes.itemActive
                                 : classes.item
                         )}>Music</NavLink>
            </div>
            <div>
                <NavLink to={'/settings'}
                         className={({isActive}) => (
                             isActive
                                 ? classes.itemActive
                                 : classes.item
                         )}>Settings</NavLink>
            </div>
        </div>
    );
}

export default Navbar;