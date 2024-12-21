import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const slidersidebar = createSlice({
  name: "slider",
  initialState,
  reducers: {
    open: (state, action) => {
      state.value = action.payload.value;
    },
  },
});

export const { open } = slidersidebar.actions;
export default slidersidebar.reducer;
