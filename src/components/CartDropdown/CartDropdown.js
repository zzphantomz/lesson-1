import React from "react";

import CustomButton from "../custom-button/CustomButton";
import "./CartDropdown.scss";
import { useSelector, useDispatch } from "react-redux";
import CartItemComponent from "../cartItem/CartItemComponent";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cartActions";

const CartDropdown = ({ history }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItemComponent key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your Cart Is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECK OUT
      </CustomButton>
    </div>
  );
};

export default withRouter(CartDropdown);
