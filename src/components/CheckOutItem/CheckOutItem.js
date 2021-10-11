import React from "react";
import { useDispatch } from "react-redux";

import "./CheckOutItem.scss";
import { clearItemFromCart } from "../../redux/cart/cartActions";
import { addItem, removeItem } from "../../redux/cart/cartActions";

const CheckOutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={cartItem.imageUrl} alt={cartItem.name} />
      </div>
      <span className="name">{cartItem.name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => dispatch(removeItem(cartItem))}>
          &#10094;
        </div>
        <span className="value">{cartItem.quantity}</span>
        <div className="arrow" onClick={() => dispatch(addItem(cartItem))}>
          &#10095;
        </div>
      </span>
      <span className="price">{cartItem.price}</span>
      <span
        className="remove-button"
        onClick={() => dispatch(clearItemFromCart(cartItem))}
      >
        &#10005;
      </span>
    </div>
  );
};

export default CheckOutItem;
