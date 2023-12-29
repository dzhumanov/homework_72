import { createSlice } from "@reduxjs/toolkit";
import { ApiDish, Dish } from "../../types";
import { fetchDishes } from "./dishesThunks";
import { RootState } from "../../app/store";

interface DishState {
  dishes: Dish[];
  dish: ApiDish | null;
  fetchLoading: boolean;
  deleteLoading: false | string;
  createLoading: boolean;
}

const initialState: DishState = {
  dishes: [],
  dish: null,
  fetchLoading: false,
  deleteLoading: false,
  createLoading: false,
};

export const dishesSlice = createSlice({
  name: "dishes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDishes.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchDishes.fulfilled, (state, { payload: items }) => {
      state.fetchLoading = false;
      state.dishes = items;
    });
    builder.addCase(fetchDishes.rejected, (state) => {
      state.fetchLoading = false;
    });
  },
});

export const dishesReducer = dishesSlice.reducer;
export const selectDishes = (state: RootState) => state.dishes.dishes;

export const selectDeleteDishLoading = (state: RootState) =>
  state.dishes.deleteLoading;
export const selectFetchDishLoading = (state: RootState) =>
  state.dishes.fetchLoading;
  export const selectCreateLoading = (state: RootState) =>
  state.dishes.createLoading;
