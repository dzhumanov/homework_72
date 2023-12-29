import React from "react";
import DishForm from "../../components/DishForm/DishForm";
import { ApiDish } from "../../types";
import { useNavigate } from "react-router-dom";
import { selectCreateLoading } from "../../store/dishes/dishesSlice";
import { createDish, fetchDishes } from "../../store/dishes/dishesThunks";
import { useAppDispatch, useAppSelector } from "../../app/Hooks";
import AdminToolbar from "../../components/AdminToolbar";

const NewDish: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const createLoading = useAppSelector(selectCreateLoading);

  const onSubmit = async (dish: ApiDish) => {
    await dispatch(createDish(dish));
    await dispatch(fetchDishes());
    navigate("/admin");
  };

  return (
    <>
      <AdminToolbar />
      <div className="container w-50">
        <DishForm onSubmit={onSubmit} isLoading={createLoading} />
      </div>
    </>
  );
};

export default NewDish;
