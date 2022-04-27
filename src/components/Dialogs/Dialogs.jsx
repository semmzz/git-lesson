import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div>
            <NavLink to={props.id}
                     className={`${classes.dialog} ${classes.active}`}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => <div className={classes.message}>{props.text}</div>


const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogItems}>
                <DialogItem name={"Vlad"} id={"1"}/>
                <DialogItem name={"Diana"} id={"2"}/>
                <DialogItem name={"Sergey"} id={"3"}/>
                <DialogItem name={"Vitaliy"} id={"4"}/>
                <DialogItem name={"Emma"} id={"5"}/>
                <DialogItem name={"Sebastian"} id={"6"}/>
            </div>

            <div className={classes.messages}>
                <Message text={'Hi'}/>
                <Message text={'How are you?'}/>
                <Message text={'Ok'}/>
            </div>

        </div>

    )
}

export default Dialogs;