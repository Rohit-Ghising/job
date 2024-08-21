import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      <ul className="text-2xl">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/Product">
          <li>Product</li>
        </Link>

        <Link to="/login">
          <li>login</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
