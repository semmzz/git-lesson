import React from "react";
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <nav className={classes.nav}>

                <div>
                    <NavLink to="/profile"
                             className={({isActive}) => {
                                 return isActive ? classes.linkActive : classes.link
                             }}
                    >Profile</NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs"
                             className={({isActive}) => {
                                 return isActive ? classes.linkActive : classes.link
                             }}
                    >Messages</NavLink>
                </div>
                <div>
                    <NavLink to="/news"
                             className={({isActive}) => {
                                 return isActive ? classes.linkActive : classes.link
                             }}
                    >News</NavLink>
                </div>
                <div>
                    <NavLink to="/music"
                             className={({isActive}) => {
                                 return isActive ? classes.linkActive : classes.link
                             }}
                    >Music</NavLink>
                </div>
                <div>
                    <NavLink to="/settings"
                             className={({isActive}) => {
                                 return isActive ? classes.linkActive : classes.link
                             }}
                    >Settings</NavLink>
                </div>

        </nav>
    );
}

export default Navbar;