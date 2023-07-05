import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  isOpenSetting: true,
  isOpenEmailSetting: false,
  isOpenChangePass: false,
  isOpenAddDish: true,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setOpen: (state) => {
      state.isOpen = true;
    },
    setClose: (state) => {
      state.isOpen = false;
    },
    setOpenSetting: (state) => {
      state.isOpenSetting = true;
    },
    setCloseSetting: (state) => {
      state.isOpenSetting = false;
    },
    setOpenEmailSetting: (state) => {
      state.isOpenEmailSetting = true;
    },
    setCloseEmailSetting: (state) => {
      state.isOpenEmailSetting = false;
    },
    setOpenChangePass: (state) => {
      state.isOpenChangePass = true;
    },
    setCloseChangePass: (state) => {
      state.isOpenChangePass = false;
    },
    setOpenAddDish: (state) => {
      state.isOpenAddDish = true;
    },
    setCloseAddDish: (state) => {
      state.isOpenAddDish = false;
    },
  },
});

export const {
  setOpen,
  setClose,
  setOpenSetting,
  setCloseSetting,
  setOpenEmailSetting,
  setCloseEmailSetting,
  setOpenChangePass,
  setCloseChangePass,
  setOpenAddDish,
  setCloseAddDish
} = modalSlice.actions;

export default modalSlice.reducer;
