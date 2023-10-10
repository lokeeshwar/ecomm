import React from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";
import CartItem from "./cartitem";
import "./cart.css";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <h1>Subtotal : ${totalAmount} </h1>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button> checkout</button>
        </div>
      ) : (
        <h1>cart empty</h1>
      )}
    </div>
  );
}
