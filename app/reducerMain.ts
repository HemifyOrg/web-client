import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configReducer } from "../features";
import userSlice from "@/features/userSlice";

const persistConfigMain = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const rootReducerMain = combineReducers({
  user: userSlice.reducer,
  config: configReducer,
});

export const persistedReducerMain = persistReducer(
  persistConfigMain,
  rootReducerMain
);
