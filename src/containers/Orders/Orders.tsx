import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/Hooks";
import { selectOrders } from "../../store/orderSlice";
import { fetchOrderData } from "../../store/orderThunks";
import AdminToolbar from "../../components/AdminToolbar";

const Orders: React.FC = () => {
  const orders = useAppSelector(selectOrders);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOrderData());
  }, []);

  if (orders === null) {
    return <div>Loading</div>;
  }

  return (
    <>
      <AdminToolbar />
      <div className="container w-50">
        <div className=" mt-2">
          <div className="row gap-4">
            <h4 className="mb-2">Orders</h4>

            {Object.keys(orders).map((orderId: string) => {
              const order = orders[orderId];

              return (
                <div key={orderId} className="col-5 border">
                  <h5>Customer:</h5>
                  <p>Name: {order.customer.name}</p>
                  <p>Address: {order.customer.address}</p>
                  <p>Phone: {order.customer.phone}</p>

                  <h5>Dishes:</h5>
                  <ul>
                    {order.dishes.map((dish) => (
                      <li key={dish.dish.id}>
                        <p>Name: {dish.dish.name}</p>
                        <p>Amount: {dish.amount}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
