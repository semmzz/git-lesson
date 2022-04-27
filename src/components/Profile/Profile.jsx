import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return <div className={classes.content}>
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    </div>
}

export default Profile;