// import React from "react";
// import Button from "./Button";
//
// function ConfirmDialog(props) {
//     return(
//         <div className={`div-bg-skyblue`}>
//             <p>{props.children}을 확인한 후 버튼을 눌러주세요</p>
//             <br/>
//             <Button color='green'>확인</Button>&nbsp;
//             <Button color='blue'>취소</Button>&nbsp;
//             <Button color='red'>초기화</Button>
//         </div>
//     )
// }
//
// export default ConfirmDialog;

import React from "react";
import Button from "./Button";

function ConfirmDialog(props){
    return(
        <div className={`div-bg-skyblue`}>
            <p>{props.children}확인 후 클릭</p>
            <Button color={"red"}>확인</Button>
            <Button color={"green"}>취소</Button>
            <Button color={"blue"}>초기화</Button>
        </div>
    );
}
export  default  ConfirmDialog;