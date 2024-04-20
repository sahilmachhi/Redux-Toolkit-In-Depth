import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showUserData } from "../store/UserSlice";

function UserDetailCard() {
  const dispath = useDispatch();
  const { loading, users } = useSelector((state) => state.user);

  useEffect(() => {
    dispath(showUserData());
  }, []);

  if (loading) {
    return <h1>loading</h1>;
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "3rem",
          margin: "3rem 0",
          flexDirection: "column",
        }}
      >
        {users.map((data) => {
          return (
            <div
              className="card mx-auto"
              style={{ width: "24rem" }}
              key={data.id}
            >
              <div className="card-body">
                <h5 className="card-title">name: {data.Name}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  email: {data.email}
                </h6>
                <p className="card-text">Age: {data.age}</p>
                <p className="card-text">gender: {data.gender}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default UserDetailCard;
