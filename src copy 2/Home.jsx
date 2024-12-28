import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomerAdd from "./CustomerAdd";
import CustomerView from "./CustomerView";
import { Link } from "react-router-dom";
import { deleteuser } from "./slices/UserReducer";

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  console.log("users", users);
  const handledelete = (id) => {
    dispatch(deleteuser({ id: id }));
  };

  return (
    <>
      <div className="container">
        <CustomerAdd />
        <CustomerView />
      </div>
      <div className="container">
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
            {users.map((user, index) => (
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
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
