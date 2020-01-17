import React from "react";
import "./CartDropdown.styles.scss";

import CustomButton from "../custom-button/CustomButton";

import CartItem from "../cart-item/CartItem";

import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cartSelectors";

const CartDropdown = ({ cartItems }) => {
  var counter = 0;
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <CartItem
            key={cartItem.id}
            item={cartItem}
            counter={(counter += 1)}
          />
        ))}
      </div>

      <CustomButton>Go To Checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = state => ({ cartItems: selectCartItems(state) });

export default connect(mapStateToProps)(CartDropdown);
