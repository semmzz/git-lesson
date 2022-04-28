import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    // Companions
    const dialogElements = props.state.dialogs.map((d) => (
        <DialogItem name={d.name} id={d.id.toString()}/>
    ))

    // Messages in dialog
    const messageElements = props.state.messagesData.map((m) => (
        <Message text={m.text}/>
    ))


    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogItems}>
                {dialogElements}
            </div>

            <div className={classes.messages}>
                {messageElements}
            </div>

        </div>

    )
}

export default Dialogs;