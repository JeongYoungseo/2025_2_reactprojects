import React, {useState} from "react";
// useState 훅을 사용하여 상태설정이 변경될 때마다 다시 rendering 되도록 변경
function Counter() {
    const [count, setCount] = useState(0);

    return(
        <div>
            <p>총 {count}번 클릭</p>
            <button onClick={()=>setCount(count+1)}>Click</button>
        </div>
    )
}

export default Counter;