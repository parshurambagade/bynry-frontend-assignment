// src/features/users/usersSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: []
  },
  reducers: {
    addMultipleUsers: (state, action) => {
        state.users = action.payload;
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    deleteUser: (state, action) => {
      state = state.users.filter(user => user.id !== action.payload);
    },
    updateUser: (state, action) => {
      const index = state.users.findIndex(user => user.id === action.payload.id);
      state.users[index] = action.payload;
    }
  }
});

export const { addUser, deleteUser, updateUser, addMultipleUsers } = usersSlice.actions;
export default usersSlice.reducer;
