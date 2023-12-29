import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/Hooks";
import { deleteDish, fetchDishes } from "../../store/dishes/dishesThunks";
import {
  selectDeleteDishLoading,
  selectDishes,
  selectFetchDishLoading,
} from "../../store/dishes/dishesSlice";
import Spinner from "../Spinner/Spinner";
import DishItem from "./DishItem";

const Dishes: React.FC = () => {
  const dispatch = useAppDispatch();
  const dishes = useAppSelector(selectDishes);
  const deleteLoading = useAppSelector(selectDeleteDishLoading);
  const dishesLoading = useAppSelector(selectFetchDishLoading);

  useEffect(() => {
    void dispatch(fetchDishes());
  }, [dispatch]);

  const removeDish = async (id: string) => {
    await dispatch(deleteDish(id));
    await dispatch(fetchDishes());
  };

  return (
    <>
      <h4>Pizza:</h4>
      <div className="pizza-wrapper w-75">
        {dishesLoading ? (
          <Spinner />
        ) : (
          dishes.map((dish) => (
            <DishItem
              key={dish.id}
              dish={dish}
              deleteLoading={deleteLoading}
              onDelete={() => removeDish(dish.id)}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Dishes;
