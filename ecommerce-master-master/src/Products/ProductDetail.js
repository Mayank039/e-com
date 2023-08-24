import React, { useContext } from 'react'
import { useLocation} from 'react-router-dom'
import './ProductDetail.css'
// import Shirt1 from './images/Shirt1.png'
// import Shirt2 from './images/Shirt2.png'
// import Shirt3 from './images/Shirt3.png'

import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import { Cart } from '../store/CartContext'
import { Button } from 'react-bootstrap'

const ProductDetail = () => {
    const location = useLocation();
    const cartCntx = useContext(Cart);
    const myFunction = (event)=>{
        let fullImg = document.getElementById('imageBox');
        fullImg.src = event.target.src;
    }
    const addItemHandler=(event)=>{
        event.preventDefault();
        const quantity = Number(1);
        const prod = location.state;
        cartCntx.addItem({...prod,quantity:quantity})
       }
  return( 
    <div>
    <Header/>
    <div id='hero'>
     <div id='row'>
     <div id="col">
    <div className="product">
        <div className="product-small-img">
            <img src={location.state.images.i1} alt="Shirt1" onClick={myFunction} />
            <img src={location.state.images.i2} alt="Shirt2" onClick={myFunction} />
            <img src={location.state.images.i3} alt="Shirt3" onClick={myFunction} />
           
        </div>
        <div className="img-container">
            <img id="imageBox" src={location.state.imageUrl} alt="" />
        </div>
    </div>
    </div>
    <div id="col">

                 <div className="content">
                     <p id="p brand">{location.state.title}</p>
                     <h2 id='h2'>{location.state.detail}</h2>
                     <div id="rating">
                         <i className="fa fa-star"></i>
                         <i className="fa fa-star"></i>
                         <i className="fa fa-star"></i>
                         <i className="fa fa-star"></i>
                         <i className="fa fa-star-half-o"></i>
                     </div>
                     <p id="p price">${location.state.price}</p>
                     <p id='p'>Quantity: <input className='input' type="text" value="1"/></p>
                     <Button variant="primary" onClick={addItemHandler}>Add to Cart</Button>
                 </div>

             </div>
    </div>
</div>
<Footer/>
</div>
  )
}

export default ProductDetail