import React, {useEffect, useState} from "react";
import useCounter from "./UseCounter";

// const MAX_count = 10;
//
// function Accomodate(props) {
//     const [isFull, setIsFull] = useState(false);
//     const [count, increasCount, decreaseCount] = useCounter(0); // custom useState 사용
//
//     useEffect(() => {
//         console.log("================");
//         console.log("useEffect() isFull is called");
//         console.log(`isFull: ${isFull}`);
//     });
//     useEffect(() => {
//         setIsFull(count >= MAX_count)
//         console.log(`Current count value: ${count}`);
//     },[count]);
//
//     return(
//         <div style={{padding: 20}}>
//             <p>{`총 ${count}명 수용`}</p>
//             <button onClick={increasCount} disabled={isFull} style={{marginRight: 10}}>입장</button>
//             <button onClick={decreaseCount} style={{margin: 15}}>퇴장</button>
//             {isFull && <p style={{color:"red"}}>수용할 수 있는 정원이 가득찼습니다.</p>}
//         </div>
//     )
// }

const MAX_Count = 10;
const MIN_count = 0;

function Accomodate() {
    const[isFull,setIsFull] = useState(false)
    const[isEmpty,setIsEmpty] = useState(true)
    const[count, increaseCount,decreaseCount] = useState(0);

    useEffect(() => {
        setIsFull(count >= MAX_Count)
        console.log(`current count value: ${count}`);
    }, [count]);

    useEffect(() => {
        setIsEmpty(count <= MIN_count)
        console.log(`current count value: ${count}`);
    }, [count]);
    return(
        <div>
            <p>{`총${count}번 클릭`}</p>
            <button onClick={increaseCount} disabled={isFull}>입장</button>
            <button onClick={decreaseCount} disabled={isEmpty}>퇴장</button>
            {isFull && <p>수용 인원 초과</p>}
            {isEmpty && <p>수용 인원 미달</p>}
        </div>
    );
}




export default Accomodate;