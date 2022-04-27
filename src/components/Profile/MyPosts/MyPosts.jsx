import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    const postsElements = props.posts.map((p) => (
        <Post message={p.text} likesCount={p.likesCount}/>
    ))

    return (
        <div className={classes.postBlock}>
            <h3>My post</h3>
            <div>

                {/*Add post*/}
                <div>
                    <textarea/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
                {/*Posts in Profile*/}
                <div className={classes.posts}>
                    {postsElements.reverse()}
                </div>

            </div>
        </div>
    )
}

export default MyPosts;