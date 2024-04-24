import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUserData } from "../store/UserSlice";
import UserPopUp from "./UserPopUp";
import { useNavigate } from "react-router-dom";

function UserDetailCard() {
  const Navigate = useNavigate();
  const dispath = useDispatch();
  const { loading, users, searchData } = useSelector((state) => state.user);

  const [popup, setPopup] = useState(false);
  const [id, setId] = useState("");

  useEffect(() => {
    dispath(showUserData());
  }, [dispath]);

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
        {popup && (
          <UserPopUp popup={popup} setPopup={setPopup} id={id} users={users} />
        )}
        {users &&
          users
            .filter((data) => {
              if (searchData.lenght == 0) {
                return data;
              } else {
                return data.Name.toLowerCase().includes(
                  searchData.toLowerCase()
                );
              }
            })
            .map((data) => {
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
                  <div className=" d-flex justify-content-evenly">
                    <button
                      onClick={() => {
                        setId(data.id);
                        setPopup(!popup);
                      }}
                    >
                      View
                    </button>
                    <button
                      onClick={() => {
                        Navigate(`/update/${data.id}`);
                      }}
                    >
                      edit
                    </button>
                    <button
                      onClick={() => {
                        dispath(deleteUser(data.id));
                      }}
                    >
                      delete
                    </button>
                  </div>
                </div>
              );
            })}
      </div>
    </>
  );
}

export default UserDetailCard;
