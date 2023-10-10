import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import {Storefront} from 'phosphor-react'
import {SignIn} from 'phosphor-react'
import {User} from 'phosphor-react'
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="search">
        <input type="text" placeholder="search"/>
      </div>
      <div className="links">
        <Link to={"/"}><Storefront size={32} /></Link>
        <Link to={"/cart"}>
          <ShoppingCart size={32} />
        </Link>
        <Link to={'/signup'}><SignIn size={32} /></Link>
        <Link to={'/login'}><User size={32} /></Link>
      </div>
    </div>
  );
}
