import React, { Component } from "react";
import PrevCollection from "../../components/preview-collection/PrevCollection";

import SHOP_DATA from "./shop.data";

export default class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <PrevCollection key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
