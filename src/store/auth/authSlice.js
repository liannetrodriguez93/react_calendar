import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "checking",
  user: {},
  errorMessage: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    onChecking: (state) => {
      state.status = "checking";
      state.user = {};
      state.errorMessage = undefined;
    },
    onLogin: (state, { payload }) => {
      state.status = "autheticated";
      state.user = payload;
      state.errorMessage = undefined;
    },
    onLogout: (state, { payload }) => {
      state.status = "not-autheticated";
      state.user = {};
      state.errorMessage = payload;
    },
    clearErrorMessage: (state) => {
        state.errorMessage = undefined;
    }
  },
});

export const { onChecking, onLogin, onLogout, clearErrorMessage } = authSlice.actions;
