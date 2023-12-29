import { configureStore } from "@reduxjs/toolkit";
import { dishesReducer } from "../store/dishes/dishesSlice";
import { cartReducers } from "../store/cartSlice";

export const store = configureStore({
  reducer: {
    dishes: dishesReducer,
    cart: cartReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
