import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ConfigState {
  name: string;
  infuraId: string;
  chainId: string;
  networkName: string;
  usdtContractAddress: string;
}

const initialState: ConfigState = {
  name: '',
  infuraId: '',
  chainId: '',
  networkName: '',
  usdtContractAddress: '',
};

export const loadConfig = createAsyncThunk('config/load', async (_, { dispatch }) => {
  fetch('/api/config')
    .then((response) => response.json())
    .then((json) => dispatch(received(json)));
});

export const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    received: (state, action: PayloadAction<ConfigState>) => {
      state.name = action.payload.name;
      state.infuraId = action.payload.infuraId;
      state.chainId = action.payload.chainId;
      state.networkName = action.payload.networkName;
      state.usdtContractAddress = action.payload.usdtContractAddress;
    },
  },
});

export const { received } = configSlice.actions;

export default configSlice.reducer;
