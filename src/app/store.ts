import { configureStore } from "@reduxjs/toolkit";
import { dishesReducer } from "../store/dishes/dishesSlice";
import { cartReducers } from "../store/cartSlice";
import { ordersReducers } from "../store/orderSlice";

export const store = configureStore({
  reducer: {
    dishes: dishesReducer,
    cart: cartReducers,
    orders: ordersReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
