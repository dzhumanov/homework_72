import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ApiDish } from "../../types";
import DishForm from "../../components/DishForm/DishForm";
import Spinner from "../../components/Spinner/Spinner";
import {
  selectFetchOneDishLoading,
  selectOneDish,
  selectUpdateDishLoading,
} from "../../store/dishes/dishesSlice";
import { fetchDish, updateDish } from "../../store/dishes/dishesThunks";
import { useAppDispatch, useAppSelector } from "../../app/Hooks";
import AdminToolbar from "../../components/AdminToolbar";

const EditDish: React.FC = () => {
  const dispatch = useAppDispatch();
  const fetchLoading = useAppSelector(selectFetchOneDishLoading);
  const updateLoading = useAppSelector(selectUpdateDishLoading);
  const dish = useAppSelector(selectOneDish);

  const { id } = useParams() as { id: string };
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchDish(id));
  }, [dispatch, id]);

  const onSubmit = async (dish: ApiDish) => {
    await dispatch(updateDish({ id, dish }));
    navigate("/admin");
  };

  const existingDish = dish
    ? {
        ...dish,
        price: dish.price.toString(),
      }
    : undefined;

  let formSection = <Spinner />;

  if (!fetchLoading) {
    if (dish) {
      formSection = (
        <DishForm
          onSubmit={onSubmit}
          existingDish={existingDish}
          isEdit
          isLoading={updateLoading}
        />
      );
    } else {
      formSection = <h4>Not found!</h4>;
    }
  }

  return (
    <>
      <AdminToolbar />
      <div className="container w-50">
        <div className="row mt-2">
          <div className="col">{formSection}</div>
        </div>
      </div>
    </>
  );
};

export default EditDish;
