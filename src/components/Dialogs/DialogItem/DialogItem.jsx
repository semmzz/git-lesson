import React from "react";
import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom"


// Companions

const DialogsItem = (props) => {
    return (
        <div>
            <NavLink to={props.id}
                     className={classes.companion}>{props.name}</NavLink>
        </div>

    )
}

export default DialogsItem;