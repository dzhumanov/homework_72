import React, { useCallback, useState } from "react";
import { Customer, ApiOrder } from "../../types";
import axiosApi from "../../axiosApi";
import { useNavigate } from "react-router-dom";
import { clearCart, selectCartDishes } from "../../store/cartSlice";
import { useAppDispatch, useAppSelector } from "../../app/Hooks";
import Toolbar from "../../components/Toolbar/Toolbar";
import CartDishes from "../../components/Cart/CartDishes";
import { DELIVERY } from "../../constants";

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const cartDishes = useAppSelector(selectCartDishes);

  const [customer, setCustomer] = useState<Customer>({
    name: "",
    address: "",
    phone: "",
  });

  const customerChanged = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;

      setCustomer((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },
    []
  );

  const onFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const order: ApiOrder = {
      customer,
      dishes: cartDishes,
    };

    await axiosApi.post("orders.json", order);
    dispatch(clearCart());
    navigate("/");
  };

  let form = (
    <form onSubmit={onFormSubmit}>
      <div className="form-group">
        <label htmlFor="name">Client name</label>
        <input
          id="name"
          type="text"
          name="name"
          required
          className="form-control"
          value={customer.name}
          onChange={customerChanged}
        />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address</label>
        <input
          id="address"
          type="text"
          name="address"
          required
          className="form-control"
          value={customer.address}
          onChange={customerChanged}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="text"
          name="phone"
          required
          className="form-control"
          value={customer.phone}
          onChange={customerChanged}
        />
      </div>
      <button
        disabled={!customer.name || !customer.address || !customer.phone}
        type="submit"
        className="btn btn-primary"
      >
        Place order
      </button>
    </form>
  );

  const total = cartDishes.reduce((sum, cartDish) => {
    return sum + cartDish.amount * cartDish.dish.price;
  }, DELIVERY);

  return (
    <>
      <Toolbar />
      <div className="container w-50">
        <div className="order-info">
          <h3>Your order:</h3>
          <CartDishes cartDishes={cartDishes} />
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
        <div className="row mt-2">
          <div className="col">
            <h4>Contact data</h4>
            {form}
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
