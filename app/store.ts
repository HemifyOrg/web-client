import { configureStore } from '@reduxjs/toolkit';
import accountReducer from '../features/accountSlice';
import configReducer from '../features/configSlice';

const store = configureStore({
  reducer: {
    account: accountReducer,
    config: configReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
