import React, {useState} from "react";
import './Fruit.css';

function Fruit() {
    const [value, setValue] = useState('strawberry');
    const handleChange = (event) => {
        setValue(event.target.value);
    }
    const handleSubmit = (event) => {
        alert("선택된 과일:" + value);
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>
                과일 선택:
                <select value={value} onChange={handleChange}>
                    <option value={"strawberry"}>딸기</option>
                    <option value={"mango"}>망고</option>
                    <option value={"orange"}>귤</option>
                    <option value={"watermelon"}>수박</option>
                    <option value={"kiwi"}>키위</option>
                </select>
            </label>
            <button type={"submit"}>완료</button>
        </form>
    );
}
export default Fruit;