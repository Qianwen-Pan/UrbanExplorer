import React from "react";
import UserList from "../components/UserList";
function Users() {
    const users = [
        {
            id: "u1",
            name: "wendy",
            image: "https://i.pinimg.com/564x/46/28/ed/4628ed0835be7bb30a953a9860be675f.jpg",
            places:3
        },
        {
            id: "u2",
            name: "momo",
            image: "https://i.pinimg.com/564x/95/18/ae/9518ae7cee282a7693b7387419febaed.jpg",
            places:1
        }
    ]
    return (
        <UserList items={users} />
    )
}

export default Users;