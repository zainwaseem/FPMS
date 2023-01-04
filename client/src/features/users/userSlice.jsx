import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  items: [],
  status: null,
  error: null,
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const response = await axios.get("http://localhost:5000/users");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
  try {
    const response = await axios.delete(`http://localhost:5000/users/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.status = "pending";
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
    },
    [fetchUsers.rejected]: (state, action) => {
      state.status = "reject";
      state.error = action.payload;
    },
    [deleteUser.pending]: (state) => {
      state.status = "pending";
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
    },
    [deleteUser.rejected]: (state, action) => {
      state.status = "reject";
      state.error = action.payload;
    },
  },
});
export default userSlice.reducer;
