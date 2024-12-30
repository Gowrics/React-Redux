import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateuser } from "./slices/UserReducer";
import axios from "axios";
const Update = () => {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users);
  console.log(users);
  const existingUser = users.users.filter((f) => f.id == id);
  const { name, email } = existingUser[0];
  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);
  console.log(existingUser);

  // const fetchingUser = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:8003/users");
  //     dispatch(setUser(response.data)); // Set fetched users
  //   } catch (err) {
  //     console.error("Error fetching users:", err);
  //   }
  // };

  const handleUpdate = async (event) => {
    event.preventDefault();
    dispatch(updateuser({ id: id, name: uname, email: uemail }));
    try {
      const response = await axios.put(
        `http://localhost:8003/users/${id}`,
        { name: uname, email: uemail } // Pass the updated data
      );
      console.log("User updated:", response.data); // Log response for debugging
    } catch (err) {
      console.error("Error updating user:", err);
    }

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
