import React from "react";
import { useSelector } from "react-redux";

function UserDetails() {
  const userData = useSelector((state) => {
    return state.users;
  });

  return (
    <>
      {userData.map((user) => {
        return <li key={user.id}>{user.text}</li>;
      })}
    </>
  );
}

export default UserDetails;
