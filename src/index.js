import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import state, {subscribe} from "./redux/state";
import {addPost, updateNewPostText,
    sendMessage, updateNewMessageText} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));


const reRenderEntireTree = () => {
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state}
                     addPost={addPost}
                     updateNewPostText={updateNewPostText}
                     sendMessage={sendMessage}
                     updateNewMessageText={updateNewMessageText}/>
            </React.StrictMode>
        </BrowserRouter>
    );
}

reRenderEntireTree();

subscribe(reRenderEntireTree)

reportWebVitals();
