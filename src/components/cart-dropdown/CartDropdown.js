import React from "react";
import "./CartDropdown.styles.scss";

import CustomButton from "../custom-button/CustomButton";

import CartItem from "../cart-item/CartItem";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cartSelectors";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cartActions";
const CartDropdown = ({ cartItems, history, dispatch }) => {
  var counter = 0;
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem
              key={cartItem.id}
              item={cartItem}
              counter={(counter += 1)}
            />
          ))
        ) : (
          <span className="empty-messsage">Your cart is empty</span>
        )}
      </div>

      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        Go To Checkout
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
