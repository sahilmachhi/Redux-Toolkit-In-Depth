import { useState } from "react";
import { useDispatch } from "react-redux";

function From() {
  const dispatch = useDispatch();

  const [user, setUser] = useState({});

  const configureUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const handleSubmit = (e) => {
    e.preventDefault
    console.log(user);
    dispatch(userData(user));
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
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            name="username"
            onChange={configureUser}
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

export default From;
