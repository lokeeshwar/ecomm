import React from "react";
import { PRODUCTS } from "../../products";
import Product from "./product";
import "./shop.css";
import { Storefront } from "phosphor-react";

export default function Shop() {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Store Front</h1>
        <Storefront size={42} />
      </div>
      <div>
        <div className="products">
          {PRODUCTS.map((product) => (
            <Product data={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
