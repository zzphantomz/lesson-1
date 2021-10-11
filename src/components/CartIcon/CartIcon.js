import React from "react";
import { ReactComponent as ShoppingIcon } from "./../../assets/shoppingBag.svg";
import "./CartIcon.scss";
import { connect } from "react-redux";
import { toggleCartHidden } from "./../../redux/cart/cartActions";
function CartIcon({ toggleCartHidden, itemCount }) {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
}
const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce(
    (accumulated, cartItem) => accumulated + cartItem.quantity,
    0
  ),
});
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
