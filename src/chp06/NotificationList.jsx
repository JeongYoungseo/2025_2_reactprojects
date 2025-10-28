import React from "react";
import notifications from "./Notification";
import Notification from "./Notification";
import notification from "./Notification";

const reservedNotification=[
    {
        id:1,
        message: "안녕"
    },
    {
        id:2,
        message: "배고파"
    },
    {
        id:3,
        message: "어려워"
    }
]
var timer
class NotificationList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            notifications: []
        }
    }

    componentDidMount() {
        const {notifications} = this.state;

        timer = setInterval(()=>{
            if(notifications.length < reservedNotification.length)
            {
                const index = notifications.length;
                notifications.push(reservedNotification[index])
                this.setState({
                    notifications: notifications
                })
            }
            else
            {
                // notification라는 state를 초기화
                //  interval 설정 clear
                this.setState({
                    notifications:[]
                });
                clearInterval(timer);
            }
        },2000);
    }

    componentWillUnmount() {
        if(timer)
        {
            clearInterval(timer);
        }
    }

    render() {
        return(
            <div>
                {
                    this.state.notifications.map((notification)=>{
                        return <Notification
                            key={notification.id}
                            id={notification.id}
                            message={notification.message}/>
                    })
                }
            </div>
        );
    }


}
export default NotificationList;

