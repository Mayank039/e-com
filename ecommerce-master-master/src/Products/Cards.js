import React from "react";

import './Cards.css'
import {ProductItem} from "./ProductItem";
import ProductList from "./ProductList";

const Cards = () => {
  const musicData = ProductItem.filter((product)=>product.id<5);
  const merchData = ProductItem.filter((product)=>product.id>=5);
  return (
  <>
    <div className="container mt-3">
      <h2 id="h2" className="text-center">T-Shirts</h2>
      <div className="row d-flex justify-content-center align-items-center " >
        {musicData.map((product) => {
          return (
            <>
              <ProductList  id={product.id}
      key={product.id}
   prod={product} />
            </>
          );
        })}

      </div>
    </div>
    <div className="container mt-3">
      <h2 id="h2" className="text-center">Jeans</h2>
      <div className="row d-flex justify-content-center align-items-center " >
        {merchData.map((product) => {
          return (
            <>
              <ProductList  id={product.id}
      key={product.id}
   prod={product} />
            </>
          );
        })}

      </div>
    </div>
    </>
  );
};

export default Cards;
