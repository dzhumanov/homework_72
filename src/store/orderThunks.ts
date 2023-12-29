import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../axiosApi";

export const fetchOrderData = createAsyncThunk(
  "orders/fetchOrderData",
  async () => {
    try {
      const response = await axiosApi.get("orders.json");
      return response.data;
    } catch (error) {
      console.log("Error!", error);
    }
  }
);

export const deleteOrder = createAsyncThunk<void, string>(
  "dishes/delete",
  async (dishId) => {
    await axiosApi.delete(`/orders/${dishId}.json`);
  }
);
