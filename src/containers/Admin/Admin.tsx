import { NavLink } from "react-router-dom";
import AdminToolbar from "../../components/Toolbar/AdminToolbar";
import Dishes from "../../components/Dishes/Dishes";

const Admin = () => {
  return (
    <>
      <AdminToolbar />
      <div className="container w-75">
        <div className="admin-top d-flex align-items-center justify-content-between w-75">
          <h1 className="fs-1 fw-bold">Admin panel</h1>
          <NavLink to="/new-dish" className=" mt-3 fs-3 btn btn-danger ">
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
