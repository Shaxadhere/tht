import { ICART_KEYS, ICart } from "./../../types/index";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ICart = {
  chips: null,
  chocolate: null,
  drink: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      console.log(payload);
      const { id, type }: { id: string; type: ICART_KEYS } = payload;
      state[type] = id;
    },
    emptyCart: (state) => {
      state.chips = null;
      state.chocolate = null;
      state.drink = null;
    },
  },
});

export const { addItem, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;
