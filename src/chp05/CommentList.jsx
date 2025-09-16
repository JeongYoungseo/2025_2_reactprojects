import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name:"방신실",
        comment:"우승 축하",
        url: "https://www.vhv.rs/dpng/d/1-17988_sad-cartoon-person-png-transparent-png.png"
    },
    {
        name:"홍정인",
        comment:"건강",
        url: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
    },
    {
        name:"백성현",
        comment:"오랜만",
        url: "https://www.vhv.rs/dpng/d/510-5107318_avatar-person-icon-png-transparent-png.png"
    }
];

function CommentList() {
    return(
        <div>
            {
                comments.map((comment) => {
                    return(
                        <Comment name={comment.name} comment={comment.comment} url={comment.url}/>
                    );
                })
            }
        </div>
    );
}
export default CommentList;