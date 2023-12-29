import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiDish, Dish, DishesList } from "../../types";
import { AppDispatch } from "../../app/store";
import axiosApi from "../../axiosApi";

export const fetchDishes = createAsyncThunk<
  Dish[],
  undefined,
  { dispatch: AppDispatch }
>("dishes/fetchAll", async (_, thunkAPI) => {
  const dishesResponse = await axiosApi.get<DishesList | null>("/dishes.json");
  const dishes = dishesResponse.data;

  let newDishes: Dish[] = [];

  if (dishes) {
    newDishes = Object.keys(dishes).map((key) => {
      const dish = dishes[key];
      return {
        ...dish,
        id: key,
      };
    });
  }
  return newDishes;
});

export const createDish = createAsyncThunk<void, ApiDish>(
  "dishes/create",
  async (dish) => {
    await axiosApi.post("/dishes.json", dish);
  }
);

export const deleteDish = createAsyncThunk<void, string>(
  "dishes/delete",
  async (dishId) => {
    await axiosApi.delete(`/dishes/${dishId}.json`);
  }
);
