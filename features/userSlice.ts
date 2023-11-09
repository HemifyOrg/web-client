import { createSlice } from "@reduxjs/toolkit";

export type UserState = {
  email: string;
  image: string;
  country: string;
  state: string;
  city: string;
  timezone: string;
  id: string;
  token: string;
  refreshToken: string;
  exp: string;
  isAuthenticated: boolean;
};

const initialState: UserState | null = {
  email: "",
  image: "",
  country: "",
  state: "",
  city: "",
  timezone: "",
  id: "",
  token: "",
  refreshToken: "",
  exp: "",
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,

  reducers: {
    login: (state, action: { payload: UserState; type: string }) => {
      state.email = action.payload.email;
      state.image = action.payload.image;
      state.country = action.payload.country;
      state.state = action.payload.state;
      state.city = action.payload.city;
      state.timezone = action.payload.timezone;
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      state.exp = action.payload.exp;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.email = "";
      state.image = "";
      state.country = "";
      state.state = "";
      state.city = "";
      state.timezone = "";
      state.id = "";
      state.token = "";
      state.refreshToken = "";
      state.exp = "";
      state.isAuthenticated = false;
    },
  },
});

export default userSlice;
