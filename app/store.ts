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
import { TypedUseSelectorHook, useSelector } from "react-redux";

// Function to retrieve the saved state from localStorage

const store = configureStore({
  reducer: persistedReducerMain,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER],
        // ignoredPaths: ["user"],
      },
    }),
  // DEV set devTools to false in production
  devTools: process.env.NODE_ENV !== "production",
});
export const reduxStoreMainPersistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
