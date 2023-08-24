import React, { useContext } from "react";
import { Cart } from "../store/CartContext";
import Model from "../UI/Model";
import classes from "./Cart.module.css";
import CartItems from "./CartItems";

const CartPage = (props) => {
  const cartCntx = useContext(Cart);
  let totalAmount = 0;
  cartCntx.items.forEach(ele=>{
    totalAmount+=ele.price*ele.quantity;
  })

  const cartItems = (
    <section>
      <div className="container">
        <h3 className="text-center">Shopping Cart</h3>
        <ul className={classes["cart-items"]}>
          {cartCntx.items.map((item) => 
            <CartItems key={Math.random()} prod={item} />
          )}
        </ul>
      </div>
    </section>
  );
  
  return (
    <Model onClose={props.onClose}>
      <div
        style={{
          position: "relative",
          fontSize: "1em",
          height: "400px",
          overflow: "auto",
          top: "0",
          right: "0",
        }}
      >
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>${totalAmount} Only</span>
        </div>
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={props.onClose}>
            Close
          </button>
          <button className={classes.button}>Order</button>
        </div>
      </div>
    </Model>
  );
};

export default CartPage;
