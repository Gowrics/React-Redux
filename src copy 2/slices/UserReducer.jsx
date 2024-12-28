import { createSlice, isAction } from "@reduxjs/toolkit";
import { userList } from "../UserList";
import { act } from "react";
const userSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateuser: (state, action) => {
      const { id, name, email } = action.payload;
      const updatableUser = state.find((user) => user.id == id);
      if (updatableUser) {
        updatableUser.name = name;
        updatableUser.email = email;
      }
    },
    deleteuser: (state, action) => {
      const { id } = action.payload;
      const updatableUser = state.find((user) => user.id == id);
      if (updatableUser) {
        return state.filter((f) => f.id !== id);
      }
    },
  },
});
export const { addUser, updateuser, deleteuser } = userSlice.actions;
export default userSlice.reducer;
