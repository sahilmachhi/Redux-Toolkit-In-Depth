import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../Store/UserSlices";

function DeleteUsers() {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteUser());
  };
  return (
    <>
      <button onClick={handleDelete}>Delete users</button>
    </>
  );
}

export default DeleteUsers;
