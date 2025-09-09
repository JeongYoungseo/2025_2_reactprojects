import React from "react";
import UserInfo from "./UserInfo";

const users = [
    {
        name: "장원영",
        comment: "럭키비키",
        avatarUrl: "https://cdn.pixabay.com/photo/2022/07/27/06/43/cat-7347316_1280.png"
    },
    {
        name: "안유진",
        comment: "모두가 좋아한다",
        avatarUrl: "https://cdn.pixabay.com/photo/2022/05/28/14/38/cartoon-dog-7227431_1280.png"
    },
    {
        name: "가을",
        comment: "아이브",
        avatarUrl: "https://cdn.pixabay.com/photo/2022/05/16/11/01/pugs-7200102_1280.png"
    },
];

function Comment(props) {
    const currentDate = new Date();
    return(
        <div>
            {
                users.map((user) => {
                    return(
                        <div className="comment">
                            <UserInfo user={user}/>
                            <div className="comment-text">
                                {user.comment}
                            </div>
                            <div className="comment-date">
                                {currentDate.toDateString()}
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Comment;