import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


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
        props.dispatch({
            type: 'UPDATE-NEW-MESSAGE-TEXT',
            newText: text,
        })
    }

    const sendMessage = () => {
        if (props.state.newMessageText.length) {
            props.dispatch({
                type: 'SEND-MESSAGE',
            })
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