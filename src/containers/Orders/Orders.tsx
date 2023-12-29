import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/Hooks";
import { selectFetchOrderLoading, selectOrders } from "../../store/orderSlice";
import { deleteOrder, fetchOrderData } from "../../store/orderThunks";
import AdminToolbar from "../../components/Toolbar/AdminToolbar";
import { Spinner } from "react-bootstrap";

const Orders: React.FC = () => {
  const orders = useAppSelector(selectOrders);
  const loading = useAppSelector(selectFetchOrderLoading);
  const dispatch = useAppDispatch();

  const removeDish = async (id: string) => {
    await dispatch(deleteOrder(id));
    await dispatch(fetchOrderData());
  };

  useEffect(() => {
    dispatch(fetchOrderData());
  }, [dispatch]);

  if (!orders || Object.keys(orders).length === 0) {
    return (
      <>
        <AdminToolbar />
        <h1 className="fs-1 fw-bold text-center">No orders.</h1>
      </>
    );
  }

  return (
    <>
      <AdminToolbar />
      <div className="container w-75">
        <div className="mt-2">
          <div className="row gap-4">
            <h4 className="mb-2 fs-1 fw-bold">Orders</h4>
            {loading ? (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              Object.keys(orders).map((orderId: string) => {
                const order = orders[orderId];

                return (
                  <div key={orderId} className="col-5 border border-danger">
                    <div className="row">
                      <div className="col-6">
                        <h3 className="fs-3 fw-medium">Customer:</h3>
                        <p>Name: {order.customer.name}</p>
                        <p>Address: {order.customer.address}</p>
                        <p>Phone: {order.customer.phone}</p>
                        <button
                          className="btn btn-danger mb-3 mt-auto d-block"
                          onClick={() => removeDish(orderId)}
                        >
                          Complete order
                        </button>
                      </div>

                      <div className="col-6">
                        <h3 className="fs-3 fw-medium">Dishes:</h3>
                        <ul>
                          {order.dishes.map((dish) => (
                            <li key={dish.dish.id}>
                              <p>{dish.dish.name}</p>
                              <p>Amount: {dish.amount}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
