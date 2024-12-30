import React, { useState } from "react";
import { addUser } from "./slices/UserReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncThunkCreator } from "@reduxjs/toolkit";
import axios from "axios";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const users = useSelector((state) => state.users.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(users);
  console.log(users.length);
  const handleSubmit = async (event) => {
    event.preventDefault();

    const newId = users.length > 0 ? Number(users[users.length - 1].id) + 1 : 1; // Fallback to 1 if users array is empty
    console.log(users.length);
    dispatch(addUser({ id: newId, name, email }));
    try {
      const response = await axios.post(
        "http://localhost:8003/users",
        { name, email, id: String(newId) } // Pass the updated data
      );
      console.log("User updated:", response.data); // Log response for debugging
    } catch (err) {
      console.error("Error updating user:", err);
    }
    navigate("/");
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 mt-5 border bg-secondary text-white p-5 ">
        <h3>Registration</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-primary mt-3">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
