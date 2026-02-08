import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CardContext } from "../Context/CardContext";

const Navbar = () => {
  const { cart } = useContext(CardContext);

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      
      <h1 className="text-xl font-bold">
        <Link to="/">MyShop</Link>
      </h1>

      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
      
    </nav>
  );
};

export default Navbar;
