import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/Hooks";
import {
  selectDishes,
  selectFetchDishLoading,
} from "../../store/dishes/dishesSlice";
import { Spinner } from "react-bootstrap";
import ClientDishItem from "./ClientDishItem";
import { fetchDishes } from "../../store/dishes/dishesThunks";

const ClientDishes: React.FC = () => {
  const dispatch = useAppDispatch();
  const dishes = useAppSelector(selectDishes);
  const dishesLoading = useAppSelector(selectFetchDishLoading);

  useEffect(() => {
    void dispatch(fetchDishes());
  }, [dispatch]);

  return (
    <>
      <h3>All dishes:</h3>
      {dishesLoading ? (
        <Spinner />
      ) : (
        dishes.map((dish) => <ClientDishItem key={dish.id} dish={dish} />)
      )}
    </>
  );
};

export default ClientDishes;
