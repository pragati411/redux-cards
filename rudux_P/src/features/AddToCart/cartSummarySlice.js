import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  total: 0,
  productList: [],
};
export const cartSummarySlice = createSlice({
  name: "cartSummarySlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      
      const { product, price } = action.payload;
      state.productList = [
        ...state.productList,
        {
          productName: product,
          productPrice: price,
        },
      ];
      state.total += Math.floor(Number(price));
    },
  },
});
export const { addToCart } = cartSummarySlice.actions;
export default cartSummarySlice.reducer;
