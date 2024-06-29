import { createSlice } from "@reduxjs/toolkit";

export const MobileSlice = createSlice({
  name: "mobile",
  initialState: {mobile: false},
  reducers: {
    showMenu: (state) => {
      state.mobile = true;
    },
    closeMenu: (state) => {
      state.mobile = false;
    },
  },
});

export const { showMenu, closeMenu } = MobileSlice.actions;
