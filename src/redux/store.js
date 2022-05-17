import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";


const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, text: 'It\'s my first post!', likesCount: 15},
                {id: 2, text: 'Hi, how are you?', likesCount: 19},
                {id: 3, text: 'Wow!', likesCount: 61},
                {id: 4, text: 'Ok', likesCount: 33},
            ],

            newPostText: '',

        },

        dialogsPage: {
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
        },
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber();
    }

}




export default store;