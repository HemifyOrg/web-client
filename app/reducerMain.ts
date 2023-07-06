import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {accountReducer, configReducer} from "../features";
import providerAccountTransform from "./reduxTransforms";


const persistConfigAccountMain = {
  key: "account",
  storage,
  transforms: [providerAccountTransform],
};

const persistConfigMain = {
  key: "root",
  storage,
  whitelist: ["account"],
};

const rootReducerMain = combineReducers({
  account: persistReducer(persistConfigAccountMain, accountReducer),
  config: configReducer,
});

export const persistedReducerMain = persistReducer(
  persistConfigMain,
  rootReducerMain
);
