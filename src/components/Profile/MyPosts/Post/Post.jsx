import React from "react";
import classes from './Post.module.css'


const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://img.gazeta.ru/files3/989/8178989/avatar-pic905-895x505-39577.jpg" alt=""/>
            {`${props.message}`}
            <p>likes = {props.likesCount}</p>
        </div>


    )
}

export default Post;