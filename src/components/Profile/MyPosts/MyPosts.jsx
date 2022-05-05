import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";




const MyPosts = (props) => {

    const postElements = props.posts.map((p) =>
        <Post message={p.text} likesCount={p.likesCount}/>
    )

    const newPostElement = React.createRef();

    const addPost = () => {
        const text = newPostElement.current.value;
        if (text.length) {
            props.dispatch(addPostActionCreator());
        }
    };

    const onPostChange = () => {
        const text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={classes.myPostsContent}>
            <h3>My post</h3>
            <div>
                <textarea onChange={onPostChange}
                          ref={newPostElement}
                          value={props.newPostText}/>
                <button onClick={addPost}>Add post</button>
            </div>

            {postElements.reverse()}
        </div>
    )


}


export default MyPosts;