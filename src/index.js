import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import store from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));


const reRenderEntireTree = () => {
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={store.getState()}
                     dispatch={store.dispatch.bind(store)}
                />
            </React.StrictMode>
        </BrowserRouter>
    );
}


store.subscribe(reRenderEntireTree)

reRenderEntireTree();

reportWebVitals();
