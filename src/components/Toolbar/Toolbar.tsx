import React from "react";
import { NavLink } from "react-router-dom";

const Toolbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid w-50">
        <NavLink to="/" className="navbar-brand">Pizza!</NavLink>
      </div>
    </nav>
  );
};

export default Toolbar;
