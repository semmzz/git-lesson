import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";


const Dialogs = (props) => {
    //props - dialogsPage
    // Companions
    const dialogElements = props.state.dialogs.map((d) => (
        <DialogItem name={d.name} id={d.id.toString()}/>
    ))

    // Messages in dialog
    const messageElements = props.state.messagesData.map((m) => (
        <Message text={m.text}/>
    ))

    const newMessage = React.createRef();

    const onChangeMessageText = () => {
        const text = newMessage.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text))
    }

    const sendMessage = () => {
        if (props.state.newMessageText.length) {
            props.dispatch(sendMessageActionCreator())
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
                          value={props.state.newMessageText}/>
                <button onClick={sendMessage}
                >Send message
                </button>
            </div>


        </div>

    )
}

export default Dialogs;