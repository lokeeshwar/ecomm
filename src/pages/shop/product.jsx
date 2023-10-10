import React from "react";

export default function Product(props) {
  const { id, productName, price, productImage } = props.data;

  return (
    <div className="product">
      <img src={productImage} alt="ecart" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn">Add to cart</button>
    </div>
  );
}
