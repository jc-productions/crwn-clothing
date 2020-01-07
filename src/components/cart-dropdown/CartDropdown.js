import React from "react";

import CustomButton from "../custom-button/CustomButton";

import "./CartDropdown.styles.scss";

export default function CardDropdown() {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />

      <CustomButton>Go To Checkout</CustomButton>
    </div>
  );
}
