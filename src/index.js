import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

const posts = [
    {id:1, text: 'It\'s my first post!', likesCount: 15},
    {id:2, text: 'Hi, how are you?', likesCount: 19},
    {id:3, text: 'Wow!', likesCount: 61},
    {id:4, text: 'Ok', likesCount: 33},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <App posts={posts}/>
        </React.StrictMode>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
