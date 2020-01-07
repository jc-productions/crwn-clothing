import React from "react";

import "./CartItem.styles.scss";

export default function CartItem({
  counter,
  item: { imageUrl, price, name, quantity }
}) {
  return (
    <div className="cart-item">
      <span>{counter}.</span>
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          ${price} <br /> QTY: {quantity}
          <br />
        </span>
      </div>
    </div>
  );
}
