import React from "react";
import { addItem } from "../redux/slices/cartSlice";  // Import action creator
import { useDispatch } from "react-redux";

const Product = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="card" style={{ width: "18rem;", margin: "10px" }}>
      {/* Product image */}
      <img className="card-img-top" src={props.image} alt={props.productName} />
      <div className="card-body">
        {/* Product name */}
        <h5 className="card-title">{props.productName}</h5>
        {/* Product price */}
        <p className="card-text">Rs. {props.price}/-</p>

        {/* Button dispatches addItem action with product info */}
        <button
          onClick={() =>
            dispatch(addItem({ name: props.productName, price: props.price }))
          }
          className="btn btn-primary"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
