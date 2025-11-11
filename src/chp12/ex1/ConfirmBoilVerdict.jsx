import React, {useState} from "react";
import BoilVerdict from "./BoilVerdict";
import "./ConfirmBoilVerdict.css";


function ConfirmBoilVerdict() {
    const [temperature, setTemperature] = useState("");
    const handleTemperature = (event) => {
        setTemperature(event.target.value);
    }
    return(
        <fieldset className={"boil-box"}>
            <legend>섭씨 온도 입력</legend>
            {/*<input type={temperature} onChange={(event) => {*/}
            {/*    setTemperature(event.target.value)*/}
            {/*}}/>*/}
            <input value={temperature} onChange={handleTemperature}/>
            <BoilVerdict celcius={parseInt(temperature)}/>
        </fieldset>
    );
}
export default ConfirmBoilVerdict;