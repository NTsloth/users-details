import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
});

const initialState = {
  users: [],
  isLoading: false,
  alertMessage: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    deleteUser: (state, action) => {
      const userId = action.payload;
      state.users = state.users.filter((user) => user.id !== userId);
    },
    updateUser: (state, action) => {
      const updatedUser = action.payload;
      const index = state.users.findIndex((user) => user.id === updatedUser.id);
      if (index !== -1) {
        state.users[index] = updatedUser;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { deleteUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
