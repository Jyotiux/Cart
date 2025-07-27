import React from "react";
import { useSelector } from "react-redux";
import { getItemsSelector } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";

const CartPage = () => {
  const items = useSelector(getItemsSelector);
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h1>Your Cart</h1>
      {items.length === 0 && <p>Your cart is empty.</p>}

      {items.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
          <p>Price: Rs. {item.price}/-</p>
        </div>
      ))}

      <h2>Total: Rs. {total}/-</h2>

      <Link to="/">Back to Products</Link>
    </div>
  );
};

export default CartPage;