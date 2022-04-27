import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={classes.postBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                <Post message="Hi, how are you?" likesCount="23"/>
                <Post message="It's my first post" likesCount="12"/>
            </div>

        </div>
    )
}

export default MyPosts;