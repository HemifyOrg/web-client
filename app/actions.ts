import userSlice from "@/features/userSlice";
import { bindActionCreators } from "@reduxjs/toolkit";
import store from "./store";
import alertSlice from "@/features/alertSlice";

export const userActions = bindActionCreators(
  userSlice.actions,
  store.dispatch
);

export const alertActions = bindActionCreators(
    alertSlice.actions,
    store.dispatch
  );
  