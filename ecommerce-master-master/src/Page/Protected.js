import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Cart } from '../store/CartContext';

const Protected = (props) => {
    const {Component} = props;
    const authCntx = useContext(Cart);
    const navigate = useNavigate();
    useEffect(()=>{
        if(!authCntx.isLoggedIn){
            navigate('/Auth');
        }
    })
  return (
    <>
        <Component/>
    </>
  )
}

export default Protected