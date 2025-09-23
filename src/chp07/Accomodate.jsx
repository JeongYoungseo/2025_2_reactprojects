import React, {useEffect, useState} from "react";
import useCounter from "./UseCounter";

const MAX_count = 10;

function Accomodate(props) {
    const [isFull, setIsFull] = useState(false);
    const [count, increasCount, decreaseCount] = useCounter(0); // custom useState 사용

    useEffect(() => {
        console.log("================");
        console.log("useEffect() isFull is called");
        console.log(`isFull: ${isFull}`);
    });
    useEffect(() => {
        setIsFull(count >= MAX_count)
        console.log(`Current count value: ${count}`);
    },[count]);

    return(
        <div style={{padding: 20}}>
            <p>{`총 ${count}명 수용`}</p>
            <button onClick={increasCount} disabled={isFull} style={{marginRight: 10}}>입장</button>
            <button onClick={decreaseCount} style={{margin: 15}}>퇴장</button>
            {isFull && <p style={{color:"red"}}>수용할 수 있는 정원이 가득찼습니다.</p>}
        </div>
    )
}

export default Accomodate;