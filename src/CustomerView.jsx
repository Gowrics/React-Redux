import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCustomer } from "./slices/customerSlice";

const CustomerView = () => {
  const customers = useSelector((state) => state.customers);
  const dispatch = useDispatch();
  const deletehandler = (index) => {
    dispatch(deleteCustomer(index));
  };
  return (
    <div>
      <h1>Customer List</h1>
      <ul style={{ listStyle: "none" }}>
        {customers.map((customer, index) => (
          <li>
            {" "}
            {customer}{" "}
            <button onClick={() => deletehandler(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CustomerView;
