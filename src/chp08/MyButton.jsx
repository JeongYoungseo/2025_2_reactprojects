import React, {useState} from "react";

function MyButton() {
    const[inputValue, setInputValue] = useState("");
    function handleChange(event) {
        setInputValue(event.target.value);
    }
    // const handleChange2 = (event) => {
    //     setInputValue(event.target.value);
    // }
    return (
        <div>
            <input size={50} type="text" onChange={handleChange}/>
            <h2 id={"result"}>입력된 내용: {inputValue}</h2>
        </div>
    );
}
export default MyButton;