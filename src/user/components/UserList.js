import React from "react";
import UserListItem from "./UserListItem";
function UserList(props) {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>User Not Found.</h2>
      </div>
    );
  }
  return (
    <ul className="user-list">
      {props.items.map((user) => (
        <UserListItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placesCount={user.places}
        />
      ))}
    </ul>
  );
}
export default UserList;
