import { configureStore } from '@reduxjs/toolkit';
import accountReducer from '../features/accountSlice';
import configReducer from '../features/configSlice';
import CircularJSON from 'circular-json';

// Function to retrieve the saved state from localStorage
const getSavedState = (stateName: string) => {
  try {
    const savedState = localStorage.getItem(stateName+'State');
    return savedState ? JSON.parse(savedState) : undefined;
  } catch (err) {
    console.error('Error parsing saved '+ stateName +' state:', err);
    return undefined;
  }
};

const store = configureStore({
  reducer: {
    account: accountReducer,
    config: configReducer,
  },
  preloadedState: {
    account: getSavedState("account"),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Subscribe to user state changes and save the updated state to localStorage
store.subscribe(() => {
  const accountState = store.getState().account;
  localStorage.setItem('accountState', CircularJSON.stringify(accountState));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
