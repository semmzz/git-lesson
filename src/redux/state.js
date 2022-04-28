import {renderEntireTree} from "../index";

const state = {
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
    },
}

export const addPost = () => {
    const newPost = {
        id: state.profilePage.posts.length + 1,
        text: state.profilePage.newPostText,
        likesCount: 0,
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree();
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree();
}

export default state;