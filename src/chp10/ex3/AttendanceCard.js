import React from "react";
import "./AttendanceCard.css";
import img2 from './imgs/2.jpg'

const students=[
    {id: 1, name: "김철수", grade: 2, major:"인공지능소프트웨어",avatar:"http://randomuser.me/api/portraits/men/1.jpg"},
    {id: 2, name: "김태연", grade: 1, major:"클라우드컴퓨팅",avatar:img2},
    {id: 3, name: "김영희", grade: 2, major:"지능형에너지설비",avatar:"http://randomuser.me/api/portraits/women/3.jpg"},
    {id: 4, name: "전지효", grade: 1, major:"시각디자인",avatar:"http://randomuser.me/api/portraits/women/4.jpg"},
    {id: 5, name: "박현경", grade: 2, major:"메타버스컨텐츠",avatar:"http://randomuser.me/api/portraits/women/5.jpg"},
    {id: 3, name: "홍정민", grade: 2, major:"전기과",avatar:"http://randomuser.me/api/portraits/men/6.jpg"},
    {id: 4, name: "방신실", grade: 1, major:"스마트정보통신",avatar:"http://randomuser.me/api/portraits/women/7.jpg"},
    {id: 5, name: "윤이나", grade: 2, major:"기계시스템디자인",avatar:"http://randomuser.me/api/portraits/women/8.jpg"}
];

function AttendanceCard() {
    return(
        <div className={"attendance-container"}>
            <h2 className={"attendance-title"}>학생출석부</h2>
            <div className={"card-container"}>
                {
                    students.map((student) => (
                        <div className={"student-card"}>
                            <img src={student.avatar} alt={student.name} className={"student-avatar"}/>
                            <div className={"student-info"}>
                                <h3>{student.name}</h3>
                                <p>{student.grade}-{student.major}</p>
                            </div>
                        </div>

                        )
                    )
                }
            </div>
        </div>
    );
}
export default AttendanceCard;