import React, { useState } from "react";
import Modal from "../Modal/Modal";
import { useNavigate } from "react-router-dom";
import CartDishes from "./CartDishes";
import { selectCartDishes } from "../../store/cartSlice";
import { useAppSelector } from "../../app/Hooks";
import { DELIVERY } from "../../constants";

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const cartDishes = useAppSelector(selectCartDishes);

  const [showModal, setShowModal] = useState(false);

  let cart = (
    <div className="alert alert-primary">Cart is empty! Add something!</div>
  );

  if (cartDishes.length > 0) {
    cart = (
      <>
        <CartDishes cartDishes={cartDishes} />
      </>
    );
  }

  const total = cartDishes.reduce((sum, cartDish) => {
    return sum + cartDish.amount * cartDish.dish.price;
  }, DELIVERY);

  return (
    <>
      <h4>Cart</h4>
      {cart}
      <button
        className="w-100 btn btn-primary"
        onClick={() => setShowModal(true)}
      >
        Order
      </button>
      <Modal
        show={showModal}
        title="Order confirmation"
        onClose={() => setShowModal(false)}
      >
        <div className="modal-body">
          <p>You want to order:</p>
          {cart}
          <div className="card mb-2 p-2">
            <div className="row">
              <div className="col">Delivery:</div>
              <div className="col-3 text-end">{DELIVERY} KGS</div>
            </div>
          </div>
          <div className="row">
            <div className="col text-end">Total:</div>
            <div className="col-3 text-end">
              <strong>{total}</strong> KGS
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button
            className="btn btn-danger"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </button>
          <button
            className="btn btn-success"
            onClick={() => navigate("/checkout")}
          >
            Continue
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Cart;
