import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { persistedReducerMain } from "./reducerMain";

// Function to retrieve the saved state from localStorage

const store = configureStore({
  reducer: persistedReducerMain,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        ignoredPaths: ["account"],
      },
    }),
  // DEV set devTools to false in production
  devTools: process.env.NODE_ENV !== "production",
});
export const reduxStoreMainPersistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
