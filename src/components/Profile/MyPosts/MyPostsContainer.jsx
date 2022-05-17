import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {

    const state = props.store.getState();

    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    const onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <MyPosts posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}
                 updateNewPostText={onPostChange}
                 addPost={addPost}
        />
    )
}


export default MyPostsContainer;