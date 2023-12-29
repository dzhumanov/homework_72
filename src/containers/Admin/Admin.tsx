import { NavLink } from "react-router-dom";
import AdminToolbar from "../../components/AdminToolbar";
import Dishes from "../../components/Dishes/Dishes";

const Admin = () => {
  return (
    <>
      <AdminToolbar />
      <div className="container w-50">
        <div className="admin-top d-flex align-items-center justify-content-between">
          <h1>Admin panel</h1>
          <NavLink to="/new-dish" className="nav-link fs-1 ">
            New Dish
          </NavLink>
        </div>
        <div className="dishes">
          <Dishes />
        </div>
      </div>
    </>
  );
};

export default Admin;
