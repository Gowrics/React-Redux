import { createSlice, isAction } from "@reduxjs/toolkit";
import { userList } from "../UserList";
const userSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    setUser: (state, action) => {
      // Replace the entire state with the new user list from the action payload
      return action.payload;
    },

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
export const { addUser, updateuser, setUser, deleteuser } = userSlice.actions;
export default userSlice.reducer;
