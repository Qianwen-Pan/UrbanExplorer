import React from "react";
import UserListItem from "./UserListItem";
function UserList(props) {
  if (props.items.length === 0) {
    return (
      <div>
        <h2>User Not Found.</h2>
      </div>
    );
  }
  return (
    <ul>
      {props.items.map((user) => (
        <li>
          <UserListItem
            key={user.id}
            id={user.id}
            image={user.image}
            placesCount={user.places}
          />
        </li>
      ))}
    </ul>
  );
}
export default UserList;
