import Cart from "../../components/Cart/Cart";
import ClientDishes from "../../components/Dishes/ClientDishes";
import Toolbar from "../../components/Toolbar/Toolbar";

const Home = () => {
  return (
    <>
      <Toolbar />
      <div className="container w-75 mt-3">
        <div className="row">
          <div className="col-9">
            <ClientDishes />
          </div>
          <div className="col-3">
            <Cart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
