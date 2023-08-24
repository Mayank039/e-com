import { useContext } from 'react';
import { Cart } from '../store/CartContext';
import classes from './CartItem.module.css';

const CartItems = (props) => {
    const cartCntx = useContext(Cart)
    const price = `$${props.prod.price.toFixed(2)}`;
    const addItemHandler=(event)=>{
      event.preventDefault();
      const quantity = Number(1);
      cartCntx.addItem({...props.prod,quantity:quantity})
     }
     const removeItemHandler=(event)=>{
      event.preventDefault();
      cartCntx.removeItem({...props.prod})
     }
     
  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.prod.title}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.prod.quantity}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={removeItemHandler}>−</button>
        <button onClick={addItemHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItems;