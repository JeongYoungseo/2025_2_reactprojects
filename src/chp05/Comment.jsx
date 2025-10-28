// import React from "react";
// import"./Comment.css";
//
// function Comment(props) {
//     return(
//         <div className={"wrapper"}>
//             <img className={"image"}
//             src={props.url}
//             />
//             <div className={"contentContainer"}>
//                 <span className={"nameText"}>{props.name}</span>
//                 <span className={"conmmentText"}>{props.comment}</span>
//             </div>
//         </div>
//     );
// }
// export default Comment;

import React from "react";

function Comment(props){
    return(
        <div>
            <img className={"image"} src={props.url}/>
            <div className={"contentContainer"}>
                <span className={"nameText"}>{props.name}</span>
                <span className={"commentText"}>{props.comment}</span>
            </div>
        </div>
    );
}
export default Comment;