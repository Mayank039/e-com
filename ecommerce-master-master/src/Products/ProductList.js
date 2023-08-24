import React, { useContext } from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {  useNavigate } from 'react-router-dom';
import { Cart } from '../store/CartContext';
import './Cards.css'

const ProductList = (props) => {
  const navigate = useNavigate();
   const cartCntx = useContext(Cart);
   const addItemHandler=(event)=>{
    event.preventDefault();
    const quantity = Number(1);
    cartCntx.addItem({...props.prod,quantity:quantity})
   }
   const productDetailHandler=()=>{
    const produ = props.prod;
    navigate(`/Store/${props.id}`,{state:produ})
   }
  return (
    <Card style={{ width: "22rem",border:"none" }} className="mx-2 mt-4 card_style" >
                <div className='img-wrapper'><Card.Img onClick={productDetailHandler} variant="top" src={props.prod.imageUrl} style={{height:"16rem",cursor: "pointer"}} id="outfit" className='hover-zoom'/></div>
                <Card.Body>
                  <Card.Title>{props.prod.title}</Card.Title>
                  <Card.Text>${props.prod.price}</Card.Text>
                  {/* <Button onClick={productDetailHandler}>More...</Button> */}
                  <Button variant="primary" onClick={addItemHandler}>Add to Cart</Button>
                </Card.Body>
              </Card>
  )
}

export default ProductList