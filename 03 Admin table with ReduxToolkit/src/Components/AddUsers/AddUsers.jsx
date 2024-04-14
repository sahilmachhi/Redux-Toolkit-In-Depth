import { useDispatch } from "react-redux";
import { useState } from "react";
import { addUser } from "../../Store/UserSlices";

const AddUsers = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  function HandleSubmit(e) {
    e.preventDefault();
    if (name === "") {
      alert("write name");
    } else {
      dispatch(addUser(name));
      setName("");
    }
  }
  return (
    <>
      <form onSubmit={HandleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button type="submit">add user data</button>
      </form>
    </>
  );
};

export default AddUsers;
