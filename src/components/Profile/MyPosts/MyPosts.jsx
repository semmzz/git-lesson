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
        // alert('New post: ' + text);
        props.addPost(text);

    };

    return (
        <div className={classes.myPostsContent}>
            <h3>My post</h3>
            <div>
                <textarea ref={newPostElement}></textarea>
                <button onClick={addPost}>Add post</button>
            </div>
            <button onClick={()=> console.log(props, props.posts)}>test</button>

            {postElements.reverse()}
        </div>
    )


}


export default MyPosts;