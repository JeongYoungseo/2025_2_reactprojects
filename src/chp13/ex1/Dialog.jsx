import React, {useState} from "react";
import FancyBorder from "./FancyBorder";


function Dialog(props) {
    return(
        <FancyBorder color={"skyblue"}>
            <h1 className={"dialog-title"}>{props.title}</h1>
            <p className={"dialog-message"}>{props.message}</p>
            {props.children}
        </FancyBorder>
    );
}

export function WelcomeDialog(props) {
    return(
        <Dialog
            title={"Hello~"}
            message={"Welcome~"}
        />
    );
}

export function GoodbyeDialog(props) {
    return(
        <Dialog
            title={"Goodbye"}
            message={"byebye"}
       />
    );
}

export default Dialog;
