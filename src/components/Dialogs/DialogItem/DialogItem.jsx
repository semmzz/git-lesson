import React from "react";
import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";


// Companion
const DialogItem = (props) => {
    return (
        <div>
            {/*Open dialog with companion*/}
            <NavLink to={props.id}
                     className={`${classes.dialog} ${classes.active}`}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;
