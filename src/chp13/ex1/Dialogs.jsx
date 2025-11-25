import React from "react";
import FancyBorder from "./FancyBorder";
import Dialog, {GoodbyeDialog, SignUpDialog, WelcomeDialog} from "./Dialog";

function Dialogs() {
    return(
        <FancyBorder>
            <Dialog title={"Hi"} message={"hihi"}/>
            <WelcomeDialog/>
            <GoodbyeDialog/>
        </FancyBorder>
    );
}
export default Dialogs;