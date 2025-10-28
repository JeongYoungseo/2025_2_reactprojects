import React from "react";
import imgs1 from './images/1.jpg'
import imgs2 from './images/2.jpg'
import imgs3 from './images/3.jpg'
import imgs4 from './images/4.jpg'
import imgs5 from './images/5.jpg'
import './AttendancePractice.css';


const alcohols = [
    {id: 1, name: "소주", alcoholDegree: "15%",avatar:imgs1},
    {id: 2, name: "양주", alcoholDegree:"21%",avatar:imgs2},
    {id: 3, name: "맥주", alcoholDegree:"5%",avatar:imgs3},
    {id: 4, name: "막걸리", alcoholDegree:"5%",avatar:imgs4},
    {id: 5, name: "와인", alcoholDegree: "12%",avatar:imgs5}

];

function AttendancePractice() {
    return(
        <div className={"alcohol-attendance-container"}>
            <h2 className={"alcohol-attendance-title"}>술</h2>
            <div className={"alcoholCard-container"}>
                {
                    alcohols.map((alcohol) => (
                        <div className={"alcohol-card"}>
                            <img src={alcohol.avatar} alt={alcohol.name} className={"alcohol-avatar"}/>
                            <div className={"alcohol-info"}>
                                <h3>{alcohol.name}</h3>
                                <p>{alcohol.alcoholDegree}</p>
                            </div>
                        </div>
                        )
                    )
                }
            </div>
        </div>
    );
}

export default AttendancePractice;