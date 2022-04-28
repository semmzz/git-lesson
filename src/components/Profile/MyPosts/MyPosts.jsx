import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {

    // props.posts - Info about posts from index.js
    const postElements = props.posts.map((p)=>
         <Post message={p.text} likesCount={p.likesCount}/>
    )

    return (
        <div>My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            {postElements.reverse()}



        </div>
    )
}

export default MyPosts;