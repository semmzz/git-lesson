import React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    const state = props.store.getState().dialogsPage;

    const onChangeMessageText = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }

    const sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    return (
        <Dialogs
            dialogsPage={state}
            onChangeMessageText={onChangeMessageText}
            onSendMessage={sendMessage}
        />

    )
}

export default DialogsContainer;