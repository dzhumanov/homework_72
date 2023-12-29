import { Dish } from "../../types";
import React from "react";
import { useAppDispatch } from "../../app/Hooks";
import { addDish } from "../../store/cartSlice";

interface Props {
  dish: Dish;
}

const ClientDishItem: React.FC<Props> = ({ dish }) => {
  const imageUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png";
  const dispatch = useAppDispatch();
  const image = dish.image || imageUrl;
  const imageStyle = {
    background: `url(${image}) no-repeat center center / cover`,
  };

  const addDishToCart = () => {
    dispatch(addDish(dish));
  };

  return (
    <div className="card mb-2" onClick={addDishToCart}>
      <div className="row no-gutters">
        <div className="col-sm-4 rounded-start" style={imageStyle} />
        <div className="col-sm-8">
          <div className="card-body">
            <h5 className="card-title">{dish.name}</h5>
            <p className="card-text">{dish.price} KGS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDishItem;
