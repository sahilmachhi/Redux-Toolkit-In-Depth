import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../store/UserSlice";
import { useNavigate, useParams } from "react-router-dom";

function Update() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { users } = useSelector((state) => state.user);
  const userdata = users.filter((user) => user.id == id);
  const userForm = userdata[0];

  const [user, setUser] = useState({
    Name: userForm.Name,
    FullName: userForm.FullName,
    age: userForm.age,
    id: userForm.id,
    gender: userForm.gender,
    phone: userForm.phone,
    email: userForm.email,
  });

  const configureUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    dispatch(editUser(user));
    navigate("/");
  };
  return (
    <>
      <form className="w-50 mx-auto mt-5 h-full" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            onChange={configureUser}
            value={user.email}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            name="Name"
            onChange={configureUser}
            value={user.Name}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">FullName</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            name="FullName"
            onChange={configureUser}
            value={user.FullName}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="text "
            className="form-control"
            id="exampleInputPassword1"
            name="phone"
            onChange={configureUser}
            value={user.phone}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">age</label>
          <input
            type="number"
            className="form-control"
            id="exampleInputPassword1"
            name="age"
            onChange={configureUser}
            value={user.age}
          />
        </div>
        <div className="my-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              // name="flexRadioDefault"
              id="flexRadioDefault1"
              name="gender"
              value="male"
              onChange={configureUser}
            />
            <label className="form-check-label">male</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              // name="flexRadioDefault"
              id="flexRadioDefault2"
              name="gender"
              value="female"
              onChange={configureUser}
            />
            <label className="form-check-label">female</label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default Update;
