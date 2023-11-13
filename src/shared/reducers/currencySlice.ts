import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {},
});

export const {} = currencySlice.actions;
export default currencySlice.reducer;
