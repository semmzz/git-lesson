import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {

    const postElements = props.posts.map((p) =>
        <Post message={p.text} likesCount={p.likesCount}/>
    )

    const newPostElement = React.createRef();

    const addPost = () => {
        const text = newPostElement.current.value;
        if (text.length) {
            props.dispatch({type: "ADD-POST"});
        }
    };

    const onPostChange = () => {
        const text = newPostElement.current.value;
        props.dispatch({
            type: 'UPDATE-NEW-POST-TEXT',
            newText: text,
        });
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