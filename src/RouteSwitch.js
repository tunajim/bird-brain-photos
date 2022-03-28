import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import ShoppingCart from "./ShoppingCart";
import "./styles/header.css";

const RouteSwitch = () => {
  const [cart, updateCart] = useState([]);
  const [cartIsFilled, fillCart] = useState(false);

  useEffect(() => {
    updateCart(cart);
  }, [cart]);

  const addToCart = (entry) => {
    const arr = [];
    processItemQuantity(entry, arr);
    updateCart(cart.concat(arr));
    fillCart(true);
  };

  const emptyCart = (label, arr) => {
    const cartArr = cart.filter((elem) => elem.name !== label);
    console.log({cartArr});
    arr.push()
    console.log({label});
  }
  const editCart = (name, img, price, qty) => {
    const arr = [];
    emptyCart(name, arr);
    
    for(let i = 0; i < qty; i++) {
      arr.push({name: name, img: img, price: price})
    }
    arr.concat(cart);

    console.log(cart)
    console.log(cart)
    updateCart(arr);
    console.log(cart)
  }
  return (
    <BrowserRouter>
      <header>
        <h1>Bird Brain Photos</h1>
        <nav>
          <Link to="/bird-brain-photos">Home</Link>
          <Link to="/shopping-cart">
            Cart
            {cart.length}
            {cartIsFilled ? `(${cart.length})` : null}
          </Link>
        </nav>
      </header>
      <Routes>
        <Route
          path="/bird-brain-photos"
          element={<Home addToCart={addToCart} />}
        />
        <Route path="/shopping-cart" element={<ShoppingCart cart={cart} updateCart={editCart}/>} />
      </Routes>
    </BrowserRouter>
  );
};

function processItemQuantity(entry, arr) {
  for (let i = 0; i < entry.quantity; i++) {
    arr.push(entry);
  }
}

export default RouteSwitch;
