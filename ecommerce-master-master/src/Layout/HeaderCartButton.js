import React, { useContext } from 'react'
import classes from './HeaderCartButton.css'
import Badge from 'react-bootstrap/Badge';
import { Cart } from '../store/CartContext';



const HeaderCartButton = (props) => {
    const cartCntx = useContext(Cart);
    let quantity=cartCntx.items.length;

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span>Your Cart</span>
      <Badge bg="success">{quantity}</Badge>
    </button>
  )
}

export default HeaderCartButton