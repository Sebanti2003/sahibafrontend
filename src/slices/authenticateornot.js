import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
  auth: false,
  role: "",
};

const authenticatedornotSlice = createSlice({
  name: "authenticatedornot",
  initialState,
  reducers: {
    setauthenticatedornot: (state, action) => {
      state.value = action.payload.value;
      state.role = action.payload.role;
      state.auth = !!state.value;
    },
    logout: (state) => {
      state.value = "";
      state.auth = false;
      state.role = "";
    },
  },
});

export const { setauthenticatedornot, logout } = authenticatedornotSlice.actions;
export default authenticatedornotSlice.reducer;
