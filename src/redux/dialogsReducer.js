const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {
    dialogs: [
        {id: 1, name: 'Vlad'},
        {id: 2, name: 'Diana'},
        {id: 3, name: 'Sergey'},
        {id: 4, name: 'Vitaliy'},
        {id: 5, name: 'Emma'},
        {id: 6, name: 'Sebastian'},
    ],

    messagesData: [
        {id: 1, text: 'Hi!'},
        {id: 2, text: 'How are you?'},
        {id: 3, text: 'Yo'},
        {id: 4, text: 'Ok'},
        {id: 5, text: 'Yo'},
    ],
    newMessageText: '',
}


const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            const newMessage = {
                id: state.messagesData.length + 1,
                text: state.newMessageText,
            }
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            return state;
        }

        case UPDATE_NEW_MESSAGE_TEXT: {
            state.newMessageText = action.newText;
            return state;
        }

        default:
            return state;
    }
}


export const sendMessageActionCreator = () => ({
    type: SEND_MESSAGE,
})

export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text,
})

export default dialogsReducer;