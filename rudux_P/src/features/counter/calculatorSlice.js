import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: 0,
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    add: (state, action) => {
      console.log("SK@", state);
      const { input1, input2 } = action.payload;
      state.result = Number(input1) + Number(input2);
    },
    subtract: (state, action) => {
      const { input1, input2 } = action.payload;
      state.result = input1 - input2;
    },
  },
});
export const { add, subtract } = calculatorSlice.actions;
export default calculatorSlice.reducer;
