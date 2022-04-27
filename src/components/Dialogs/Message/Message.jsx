import React from "react";
import classes from "../Dialogs.module.css";


// Message in dialog
const Message = (props) => (
    <div className={classes.message}>{props.text}</div>)

export default Message;