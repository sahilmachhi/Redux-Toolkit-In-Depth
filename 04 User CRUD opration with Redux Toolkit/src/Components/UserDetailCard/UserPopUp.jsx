import React from "react";
import PropTypes from "prop-types";

function UserPopUp({ setPopup, popup, id, users }) {
  const user = users.filter((u) => u.id == id)[0];
  console.log(user);
  return (
    <>
      <div
        style={{
          // height: "300px",
          // width: "700px",
          backgroundColor: "green",
          position: "fixed",
          zIndex: "1",
          borderRadius: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            margin: "10px",
            padding: "50px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button style={{ alignSelf: "end" }} onClick={() => setPopup(!popup)}>
            close
          </button>
          <div>
            <h2>Name: {user.Name}</h2>
            <h3>full Name: {user.FullName}</h3>
            <h3>Age: {user.age}</h3>
            <h3>Email: {user.email}</h3>
            <h3>Gender: {user.gender}</h3>
            <h3>Phone: {user.phone}</h3>
          </div>
        </div>
      </div>
    </>
  );
}
UserPopUp.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.string.isRequired,
  setPopup: PropTypes.bool.isRequired,
  popup: PropTypes.bool.isRequired,
};
export default UserPopUp;
