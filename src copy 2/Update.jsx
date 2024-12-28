import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateuser } from "./slices/UserReducer";
const Update = () => {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter((f) => f.id == id);
  const { name, email } = existingUser[0];
  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);
  console.log(existingUser);

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(updateuser({ id: id, name: uname, email: uemail }));
    navigate("/");
  };
  return (
    <div>
      <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
        <div className="w-50 mt-5 border bg-secondary text-white p-5 ">
          <h3>Update the user</h3>
          <form onSubmit={handleUpdate}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={uname}
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={uemail}
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button className="btn btn-primary mt-3">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
