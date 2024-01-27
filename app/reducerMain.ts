import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { configReducer } from "../features";
import userSlice from "@/features/userSlice";
import alertSlice from "@/features/alertSlice";
import indexedDBStorage from "./indexDB";

const persistConfigMain = {
  key: "root",
  storage: indexedDBStorage,
  whitelist: ["user"],
};

const rootReducerMain = combineReducers({
  user: userSlice.reducer,
  notifications: alertSlice.reducer,
  config: configReducer,
});

export const persistedReducerMain = persistReducer(
  persistConfigMain,
  rootReducerMain
);
