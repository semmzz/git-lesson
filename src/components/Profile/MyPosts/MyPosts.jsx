import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {

    const postElements = props.posts.map((p) =>
        <Post message={p.text} likesCount={p.likesCount}/>
    )

    const newPostElement = React.createRef();

    const onAddPost = () => {
        const text = newPostElement.current.value;
        if (text.length) {
            props.addPost();
        }
    };

    const onPostChange = () => {
        const text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={classes.myPostsContent}>
            <h3>My post</h3>
            <div>
                <textarea onChange={onPostChange}
                          ref={newPostElement}
                          value={props.newPostText}/>
                <button onClick={onAddPost}>Add post</button>
            </div>

            {postElements.reverse()}
        </div>
    )


}


export default MyPosts;