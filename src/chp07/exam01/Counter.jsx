// import React, {useEffect, useState} from "react";
// // useState 훅을 사용하여 상태설정이 변경될 때마다 다시 rendering 되도록 변경
// function Counter() {
//     const [count, setCount] = useState(0);
// // useEffect 훅은 클래스형컴포넌트에서 컴포넌트가 마운트되었을 때, 컴포넌트가 업데이트(변경)되었을 때 자동으로 호출되는 callBack메소드가
// // 함수형 컴포넌트에는 없기 때문에 useEffect 훅을 대신 사용
// // count useState 설정이 변경될 때마다 제목표시줄에 문자열을 변경하고자 함
// useEffect(()=>{
//    document.title = `총 ${count}번 클릭`;
//    // 클래스형컴포넌트에서 컴포넌트가 언마운트되었을 때
//     return ()=>{
//
//     }
// });
//     return(
//         <div>
//             <p>{count}번</p>
//             <button onClick={()=>setCount(count+1)}>Click</button>
//         </div>
//     )
// }
//
// export default Counter;

import React,{useState,useEffect} from "react";

function Counter(){
    const[count,setCount] =useState(0)

    useEffect(() => {
        document.title = `총 ${count}번 클릭`


    },);
    return(
        <div>
            <p>{count}번 클릭</p>
            <button onClick={()=>setCount(count+1)}Click></button>
        </div>
    );
}
export default Counter;