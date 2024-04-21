import React from "react";
import PropTypes from "prop-types";

function UserPopUp({ setPopup, popup, id, users }) {
  console.log(id);
  const user = users.filter((u) => {
    id == u.id;
    console.log(id);
  });

  console.log(user);
  return (
    <>
      <div
        style={{
          height: "300px",
          width: "700px",
          backgroundColor: "green",
          position: "fixed",
          zIndex: "1",
        }}
      >
        {/* bad practice */}
        {/* <h1>{users[id - 1].Name}</h1> */}
        <h1>{user.Name}</h1>
        <button onClick={() => setPopup(!popup)}>close</button>
      </div>
    </>
  );
}
UserPopUp.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default UserPopUp;
