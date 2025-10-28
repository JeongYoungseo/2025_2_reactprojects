// import React from "react";
// import ConfirmDialog from "./ConfirmDialog";
//
// function ConfirmDialogs(props) {
//     return(
//         <div>
//             <ConfirmDialog>내용</ConfirmDialog><br/><br/>
//             <ConfirmDialog>설명</ConfirmDialog><br/><br/>
//             <ConfirmDialog>확인</ConfirmDialog>
//         </div>
//     )
// }
//
// export default ConfirmDialogs;


import React from "react";
import ConfirmDialog from "./ConfirmDialog";


function ConfirmDialogs(props) {
    return(
        <div>
            <ConfirmDialog>내용</ConfirmDialog>
            <ConfirmDialog>내용</ConfirmDialog>
            <ConfirmDialog>내용</ConfirmDialog>
        </div>
    );
}
export default ConfirmDialogs;