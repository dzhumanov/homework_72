import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home/Home";
import Admin from "./containers/Admin/Admin";
import NewDish from "./containers/NewDish/NewDish";
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./containers/Orders/Orders";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-dish" element={<NewDish />} />
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="*" element={<h1>Not Found!</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
