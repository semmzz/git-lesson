import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    // Data of companions
    const dialogs = [
        {id: 1, name: 'Vlad'},
        {id: 2, name: 'Diana'},
        {id: 3, name: 'Sergey'},
        {id: 4, name: 'Vitaliy'},
        {id: 5, name: 'Emma'},
        {id: 6, name: 'Sebastian'},
    ]

    // Data of message with companion
    const messagesData = [
        {id: 1, text: 'Hi'},
        {id: 2, text: 'How are you?'},
        {id: 3, text: 'Yo'},
        {id: 4, text: 'Ok'},
        {id: 5, text: 'Yo'},
    ]

    // Companions
    const dialogElements = dialogs.map((el) => (
        <DialogItem name={el.name} id={el.id.toString()}/>
    ))

    // Messages in dialog
    const messageElements = messagesData.map((m) => (
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