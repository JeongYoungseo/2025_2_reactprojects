import React from "react";

function AppNumberList() {
    const numbers = [1,2,3,4,5];
    return(
        <div>
            <h1>숫자리스트</h1>
            <NumberList numbers ={numbers}/>
        </div>
    );
}

//서브컴포넌트
function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number)=>
        <li key={number.toString()}>{number}</li>
    );
    return(
        <ul>
            {listItems}
        </ul>
    );
}
export default AppNumberList;