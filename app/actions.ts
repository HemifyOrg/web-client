import userSlice from "@/features/userSlice";
import { bindActionCreators } from "@reduxjs/toolkit";
import store from "./store";

export const userActions = bindActionCreators(
  userSlice.actions,
  store.dispatch
);
