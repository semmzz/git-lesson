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

    // Profile
    _addPost() {
        const newPost = {
            id: this._state.profilePage.posts.length + 1,
            text: this._state.profilePage.newPostText,
            likesCount: 0,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber();
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber();
    },


    // Dialogs
    _sendMessage() {
        const newMessage = {
            id: this._state.dialogsPage.messagesData.length + 1,
            text: this._state.dialogsPage.newMessageText,
        }
        this._state.dialogsPage.messagesData.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber();
    },
    _updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber();
    },

    dispatch(action) {
        switch (action.type) {
            case 'ADD-POST': {
                this._addPost();
                break;
            }
            case 'UPDATE-NEW-POST-TEXT': {
                this._updateNewPostText(action.newText);
                break;
            }
            case 'SEND-MESSAGE': {
                this._sendMessage();
                break;
            }
            case 'UPDATE-NEW-MESSAGE-TEXT':
                this._updateNewMessageText(action.newText);
                break;
        }
    }

}

export default store;
window.store = store;