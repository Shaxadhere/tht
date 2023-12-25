import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import cartReducer from "./slices/cartSlice";

const reducer = combineReducers({
  cart: cartReducer,
});

export const store = configureStore({
  reducer,
});
