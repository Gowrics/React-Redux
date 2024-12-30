import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteuser, setUser } from "./slices/UserReducer";
import axios from "axios";
import CustomerAdd from "./CustomerAdd";
import CustomerView from "./CustomerView";

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users); // Access `users` array

  const fetchingUser = async () => {
    try {
      console.log("jhjh");
      const response = await axios.get("http://localhost:8003/users");
      dispatch(setUser(response.data)); // Set fetched users
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  useEffect(() => {
    fetchingUser();
  }, []); // Track the `users` array for changes

  const handledelete = async (id) => {
    try {
      console.log("Deleting user with ID:", typeof id);
      const response = await axios.delete(
        `http://localhost:8003/users/${String(id)}`
      );

      console.log("User deleted:", response.data);

      // Dispatch to update the Redux store without fetching again
      dispatch(deleteuser({ id }));
    } catch (err) {
      console.error("Error deleting user:", err);
    }
  };

  return (
    <div className="container">
      <div className="container">
        <CustomerAdd />
        <CustomerView />
      </div>

      <h1>Crud App with JSON and Redux</h1>
      <Link className="btn btn-primary btn-sm me-2" to="/create">
        Create +
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>Id:</th>
            <th>Name:</th>
            <th>Email:</th>
            <th>Action:</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Link
                    className="btn btn-primary btn-sm me-2"
                    to={`/update/${user.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={() => handledelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No users available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
