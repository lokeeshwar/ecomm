import React, { useState } from "react";
import { createContext } from "react";

export const ShopContext = createContext(null);

export default function ShopContextProvider(props) {
  const [cartItems, setcartItems] = useState();
  return <ShopContext.provider>{props.children}</ShopContext.provider>;
}
