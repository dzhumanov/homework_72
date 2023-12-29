import { Dish } from "../../types";
import React from "react";
import { Link } from "react-router-dom";
import ButtonSpinner from "../Spinner/ButtonSpinner";

interface Props {
  dish: Dish;
  deleteLoading: boolean | string;
  onDelete: React.MouseEventHandler;
}

const DishItem: React.FC<Props> = ({ dish, onDelete, deleteLoading }) => {
  const imageUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png";
  const image = dish.image || imageUrl;
  const imageStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div className="pizza" style={imageStyle}>
      <div>
        <div className="card-body">
          <h5 className="card-title fs-3 fw-bold">{dish.name}</h5>
          <p className="card-text">{dish.price} KGS</p>
          <p className="d-flex gap-2">
            <button
              className="btn btn-danger"
              onClick={onDelete}
              disabled={deleteLoading ? deleteLoading === dish.id : false}
            >
              {deleteLoading && deleteLoading === dish.id && <ButtonSpinner />}
              Delete
            </button>
            <Link to={"/edit-dish/" + dish.id} className="btn btn-primary">
              Edit
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DishItem;
