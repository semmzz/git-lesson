import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import state from "./redux/state";
import {addPost} from "./redux/state";

// const posts = [
//     {id: 1, text: 'It\'s my first post!', likesCount: 15},
//     {id: 2, text: 'Hi, how are you?', likesCount: 19},
//     {id: 3, text: 'Wow!', likesCount: 61},
//     {id: 4, text: 'Ok', likesCount: 33},
// ]
//
// const dialogs = [
//     {id: 1, name: 'Vlad'},
//     {id: 2, name: 'Diana'},
//     {id: 3, name: 'Sergey'},
//     {id: 4, name: 'Vitaliy'},
//     {id: 5, name: 'Emma'},
//     {id: 6, name: 'Sebastian'},
// ]
//
// const messagesData = [
//     {id: 1, text: 'Hi!!'},
//     {id: 2, text: 'How are you?'},
//     {id: 3, text: 'Yo'},
//     {id: 4, text: 'Ok'},
//     {id: 5, text: 'Yo'},
// ]


const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
    <BrowserRouter>
        <React.StrictMode>

            <App state={state} addPost={addPost}/>
        </React.StrictMode>
    </BrowserRouter>
);

reportWebVitals();
