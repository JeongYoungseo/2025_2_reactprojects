import React, {useState} from "react";

function ConfirmButtonFunction() {
    const [isConfirmed,setConfirmed] = useState(false);

    function handleConfirm() {
        setConfirmed((prevIsConfirmed) => !prevIsConfirmed)
    }
    return(
        <div>
            ConfirmButton Test Function Type &nbsp;
            <button onClick={handleConfirm} disabled={isConfirmed} style={{color:"black"}}>{isConfirmed? "Confirmed": "Check"}</button>
        </div>
    );
}
export default ConfirmButtonFunction;