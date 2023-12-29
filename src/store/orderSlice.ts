import { createSlice } from "@reduxjs/toolkit";
import { ApiOrders } from "../types";
import { RootState } from "../app/store";
import { fetchOrderData } from "./orderThunks";

interface OrdersState {
  orders: ApiOrders | null;
  orderLoading: boolean;
  orderError: boolean;
}

const initialState: OrdersState = {
  orders: null,
  orderLoading: false,
  orderError: false,
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrderData.pending, (state) => {
        state.orderLoading = true;
        state.orderError = false;
      })
      .addCase(fetchOrderData.fulfilled, (state, action) => {
        state.orderLoading = false;
        state.orders = action.payload;
      })
      .addCase(fetchOrderData.rejected, (state) => {
        state.orderLoading = false;
        state.orderError = true;
      });
  },
});

export const ordersReducers = orderSlice.reducer;
export const selectOrders = (state: RootState) => state.orders.orders;
