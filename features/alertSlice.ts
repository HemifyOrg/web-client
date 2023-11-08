import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type AlertType = {
  message: string;
  type: string;
  id?: React.Key;
  timeout?: number;
  redirect_link?: string;
};

const alertSlice = createSlice({
  name: "alert",
  initialState: {
    alerts: [] as AlertType[],
  },
  reducers: {
    addAlert: (state, action: PayloadAction<AlertType>) => {
      state.alerts.push(action.payload);
      const filtered = state.alerts
        .filter((n) => n.message !== "")
        .map((n, i) => {
          n.id = i;
          return n;
        });
      state.alerts = filtered;
    },
    clearAlerts: (state) => {
      state.alerts = [];
    },
  },
});

export default alertSlice;
