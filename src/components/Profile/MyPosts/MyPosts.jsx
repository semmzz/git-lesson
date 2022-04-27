import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {

    const postElements = props.posts.map((el)=>
         <Post message={el.text} likesCount={el.likesCount}/>
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