
import { createSlice } from "@reduxjs/toolkit";


const initialState = {

  theme: "light-mode",

};

const globalSlice = createSlice({
  name: "globalSlice",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {


  },
  extraReducers: {}
});

export const {

} = globalSlice.actions;

export default globalSlice.reducer;
