import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [], // Initial state for the users
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.users = action.payload; // Update only the `users` property
    },

    addUser: (state, action) => {
      state.users.push(action.payload); // Add user to `users` array
    },

    updateuser: (state, action) => {
      const { id, name, email } = action.payload;
      // const updatableUser = state.users.find((user) => user.id === id); // Use `users` array
      // if (updatableUser) {
      //   updatableUser.name = name;
      //   updatableUser.email = email;
      // }
    },

    deleteuser: (state, action) => {
      const { id } = action.payload;
      state.users = state.users.filter((user) => user.id !== id); // Filter out user
    },
  },
});

export const { addUser, updateuser, setUser, deleteuser } = userSlice.actions;
export default userSlice.reducer;
