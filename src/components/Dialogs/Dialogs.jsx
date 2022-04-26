import React from "react";
import classes from "./Dialogs.module.css";



const Dialogs = (pr) => {
    return (
        <div className={classes.dialogs}>

            <div className={classes.dialog_items}>
                <div className={`${classes.dialog} ${classes.active}`}>Vlad</div>
                <div className={classes.dialog}> Diana</div>
                <div className={classes.dialog}> Sergey</div>
                <div className={classes.dialog}> Vitaliy</div>
                <div className={classes.dialog}> Emma</div>
            </div>

            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>How are you?</div>
                <div className={classes.message}>Ok</div>
            </div>

        </div>

    )
}

export default Dialogs;