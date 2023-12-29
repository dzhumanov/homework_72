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
    backgroundImage: `url(${image})`,
  };

  const addDishToCart = () => {
    dispatch(addDish(dish));
  };

  return (
    <div className="pizza" style={imageStyle}>
      <div>
        <div className="card-body">
          <h5 className="card-title fs-3 fw-bold">{dish.name}</h5>
          <p className="card-text">{dish.price} KGS</p>
          <button className="btn btn-danger" onClick={addDishToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientDishItem;
