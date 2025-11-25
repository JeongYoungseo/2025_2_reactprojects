import React, {useState} from "react";
import TemperatureInput from "./TemperatureInput";
import BoilVerdict from "../ex1/BoilVerdict";
import './Calculator.css';

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if(Number.isNaN(input)) {
        return '';
    }
    const output = Math.round(convert(input)*1000) / 1000;
    return output.toString();
}

function toCelsius(fahrenheit) {
    return((fahrenheit - 32) * 5) / 9; //화씨를 섭씨로 변환 수식
}
function toFahrenheit(celcius) {
    return celcius * 9 / 5 + 32; //섭씨를 화씨로 변환 수식
}

function Calculator() {
    const [temperature, setTemperature] = useState("");
    const [scale, setScale] = useState("c");

    const handleCelsiusChange = (temperature) => {
      setTemperature(temperature);
      setScale("c");
    }
    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale("f");
    }

    const celcius = scale === "f" ? tryConvert(temperature,toCelsius) : temperature;
    const fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    const isBoiling = parseFloat(celcius) >= 100;

    return(
        <div className={`calculator-box ${isBoiling ? "hot" : "cold"}`}>
            <h2 className={"calculator-title"}>온도변환기</h2>
            <div className={"calculator-inputs"}>
                <TemperatureInput scale={"c"} temperature={celcius} onTemperatureChange={handleCelsiusChange}/>
                <TemperatureInput scale={"f"} temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange}/>
            </div>
            <div className={"calculator-result"}>
                <BoilVerdict celcius={parseFloat(celcius)}/>
            </div>
        </div>

    );
}
export default Calculator;