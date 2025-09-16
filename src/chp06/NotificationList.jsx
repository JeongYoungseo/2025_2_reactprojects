import React from "react";

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

class NotificationList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            notification: []
        }
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return(
            <div>

            </div>
        );
    }


}
export default NotificationList