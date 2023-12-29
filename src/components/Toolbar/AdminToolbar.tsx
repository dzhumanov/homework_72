import React from "react";
import { NavLink } from "react-router-dom";

const AdminToolbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <div className="container-fluid w-75">
        <NavLink to="/admin" className="navbar-brand">
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Papa_John%27s_Logo_2019.svg" style={{width: '100px'}} alt="" />
        </NavLink>
        <ul className="navbar-nav mr-auto flex-row gap-2 flex-nowrap">
          <li className="nav-item">
            <NavLink to="/admin" className="nav-link">
              Dishes
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admin/orders" className="nav-link">
              Orders
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Return to client's version
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AdminToolbar;
