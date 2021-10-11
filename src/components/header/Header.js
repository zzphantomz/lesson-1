import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";

import "./Header.scss";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";

function Header({ currentUser, hidden }) {
  const history = useHistory();
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        {currentUser ? (
          <Link
            to=""
            onClick={() =>
              auth
                .signOut()
                .then(history.push("/"))
                .catch((err) => console.log(err))
            }
            className="option"
          >
            Sign Out
          </Link>
        ) : (
          <Link to="/login" className="option">
            Sign In
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  hidden: state.cart.hidden,
});

export default connect(mapStateToProps)(Header);
