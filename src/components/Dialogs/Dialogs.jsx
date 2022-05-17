import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";


const Dialogs = (props) => {
    // Companions
    const dialogElements = props.dialogsPage.dialogs.map((d) => (
        <DialogItem name={d.name} id={d.id.toString()}/>
    ))

    // Messages in dialog
    const messageElements = props.dialogsPage.messagesData.map((m) => (
        <Message text={m.text}/>
    ))

    const newMessage = React.createRef();

    const onChangeMessageText = () => {
        const text = newMessage.current.value;
        props.onChangeMessageText(text);

    }

    const onSendMessage = () => {
        if (props.dialogsPage.newMessageText.length) {
            props.onSendMessage();
        }
    }

    return (
        <div className={classes.dialogs}>
            <div>
                {dialogElements}
            </div>

            <div>
                {messageElements}

                <textarea onChange={onChangeMessageText}
                          ref={newMessage}
                          value={props.dialogsPage.newMessageText}/>
                <button onClick={onSendMessage}
                >Send message
                </button>
            </div>


        </div>

    )
}

export default Dialogs;