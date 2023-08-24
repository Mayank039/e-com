import React from 'react'
import { useState } from "react";
import Header from "../Layout/Header"
import CartPage from "../Cart/Cart";
import CartContext from "../store/CartContext";
import Footer from '../Layout/Footer';

import Cards from './Cards'

const Product = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = ()=>{
    setCartIsShown(true);
  };

  const hideCartHandler = ()=>{
    setCartIsShown(false);
  }
  return (
    <>
       <CartContext>
    {cartIsShown && <CartPage  onClose={hideCartHandler} />}
      <Header onClick={showCartHandler} button={true}/>
      <Cards/>
      <Footer/>
      </CartContext>
    </>
  )
}

export default Product