import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartContext from "./store/CartContext";
import Auth from "./Page/Auth";
import Protected from "./Page/Protected";
import LoadingSpinner from "./UI/LoadingSpinner"

const Home = lazy(() => import("./Page/Home"));
const About = lazy(() => import("./Page/About"));
const Contact = lazy(() => import("./Page/Contact"));
const ProductDetailPage = lazy(() => import("./Page/ProductDetailPage"));
const Store = lazy(() => import("./Page/Store"));
const App = () => {
  return (
    <>
    <Suspense fallback={<div className="centered">
            <LoadingSpinner />
          </div>
        }>
      <CartContext>
        <BrowserRouter>
          <div>
            <Routes>
              <Route path="/Auth" element={<Auth />}></Route>
              <Route path="/" element={<Home />}></Route>
              <Route path="/About" element={<About />}></Route>
              <Route path="/ContactUs" element={<Contact />}></Route>
              <Route
                path="/Store"
                element={<Protected Component={Store} />}
                exect
              ></Route>
              <Route
                path="/Store/:productId"
                element={<Protected Component={ProductDetailPage} />}
              ></Route>
              <Route path="*" element={<Home />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </CartContext>
      </Suspense>
    </>
  );
};

export default App;
