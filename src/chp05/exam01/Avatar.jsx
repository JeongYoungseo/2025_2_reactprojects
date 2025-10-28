// import React  from "react";
// import './Avatar.css'
//
// function Avatar (props) {
//     return(
//         <img
//         className="avatar"
//         src={props.user.avatarUrl}
//         />
//     );
//
// }
// export default Avatar;



import React from "react";

function Avatar(props) {
    return(
        <img className={"avatar"} src={props.avatarUrl} />
    );
}
export default Avatar;