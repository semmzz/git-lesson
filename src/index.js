import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));

const posts = [
    {id: 1, text: "It's my first post!", likesCount: 28},
    {id: 2, text: "2nd post!", likesCount: 233},
    {id: 3, text: "How are you?", likesCount: 15},
]

root.render(
    <React.StrictMode>
            <App posts={posts}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
