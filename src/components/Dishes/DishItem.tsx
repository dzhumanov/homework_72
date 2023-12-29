import { Dish } from "../../types";
import React from "react";
import { Link } from "react-router-dom";
// import { addDish } from "../../store/cartSlice";
import ButtonSpinner from "../Spinner/ButtonSpinner";
import { useAppDispatch } from "../../app/Hooks";

interface Props {
  dish: Dish;
  deleteLoading: boolean | string;
  onDelete: React.MouseEventHandler;
}

const DishItem: React.FC<Props> = ({ dish, onDelete, deleteLoading }) => {
  const imageUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png";
  const dispatch = useAppDispatch();
  const image = dish.image || imageUrl;
  const imageStyle = {
    background: `url(${image}) no-repeat center center / cover`,
  };
  
  return (
    <div className="card mb-2">
      <div className="row no-gutters">
        <div className="col-sm-4 rounded-start" style={imageStyle} />
        <div className="col-sm-8">
          <div className="card-body">
            <h5 className="card-title">{dish.name}</h5>
            <p className="card-text">{dish.price} KGS</p>
            <p className="d-flex gap-2">
              <button
                className="btn btn-danger"
                onClick={onDelete}
                disabled={deleteLoading ? deleteLoading === dish.id : false}
              >
                {deleteLoading && deleteLoading === dish.id && (
                  <ButtonSpinner />
                )}
                Delete
              </button>
              <Link to={"/edit-dish/" + dish.id} className="btn btn-primary">
                Edit
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishItem;
