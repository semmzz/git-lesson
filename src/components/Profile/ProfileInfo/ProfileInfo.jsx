import React from "react";
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return <div>
        <div>
            <img
                className={classes.profileImage}
                src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                alt=""/>
        </div>
        <div className={classes.descriptionBlock}>
            ava + description
        </div>

    </div>
}

export default ProfileInfo;