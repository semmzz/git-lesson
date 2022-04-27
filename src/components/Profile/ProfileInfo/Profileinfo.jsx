import classes from "../Profile.module.css";
import React from "react";


const ProfileInfo = () => {
    return (
        <div className={classes.profileContent}>
            <img
                className={classes.profileImage}
                src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                alt=""/>
            <div>ava + description</div>
        </div>
    )
}


export default ProfileInfo;