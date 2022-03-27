import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import ShoppingCart from "./ShoppingCart";
import "./styles/header.css";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <header>
        <h1>Bird Brain Photos</h1>
        <nav>
          <Link to="/bird-brain-photos">Home</Link>
          <Link to="/shopping-cart">Cart</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/bird-brain-photos" element={<Home />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
