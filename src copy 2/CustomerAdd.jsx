import React, { useState } from "react";
import CustomerView from "./CustomerView";
import { addCustomer as addCustomerAction } from "./slices/customerSlice"; //disp 1
import { useDispatch } from "react-redux"; //disp 2

const CustomerAdd = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  // const [customers, setCustomers] = useState([]);  not need

  const addCustomer = () => {
    if (input) {
      // setCustomers((previousState) => [...previousState, input]);   //not need
      dispatch(addCustomerAction(input));
      // console.log("customer", customers);
      setInput("");
    }
  };
  return (
    <>
      <div>
        <h3>add new Customer </h3>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addCustomer}>Click!</button>
      </div>
      {/* <CustomerView customers={customers} /> */}
    </>
  );
};

export default CustomerAdd;
