import "./styles/shopping-cart.css";
import { useState, useEffect } from "react";
import geeseImg from "./images/Geese.jpg";
import hawkImg from "./images/hawk.jpg";
import songSparrowImg from "./images/song-sparrow.jpg";
import CartItem from "./CartItem";

const ShoppingCart = (props) => {
  console.log(props);
  const [geeseQty, setGeese] = useState(0);
  const [hawksQty, setHawks] = useState(0);
  const [songSparrowQty, setSongSparrows] = useState(0);

  const updateTotals = (props) => {
    let geese = 0;
    let hawks = 0; 
    let songSparrows = 0;
    
    let hawkArr = [];
    let songSparrowArr = [];

    if (props.cart.length > 0) {
      props.cart.forEach((elem) => {
        if(elem.name === "Geese") geese += 1;
        if(elem.name === "Hawk") hawks += 1;
        if(elem.name === "Song Sparrow") songSparrows += 1;
      });
      console.log(geese);
      setGeese(geese);
      setHawks(hawks);
      setSongSparrows(songSparrows);
      console.log(geeseQty);
    } else {
        setGeese(0);
        setHawks(0);
        setSongSparrows(0);
    }
  };

  useEffect(() => {
    updateTotals(props);
    console.log(geeseQty);
  }, [props.cart]);

  return (
    <div>
      {props.cart.length === 0 ? <h2>Shopping Cart is Empty</h2> : null}
      {geeseQty > 0 ? (
        <CartItem name="Geese" img={geeseImg} qty={geeseQty} price="99.99" updateCart={props.updateCart} updateTotal={setGeese}/>
      ) : null}
      {hawksQty > 0 ? (
          <CartItem name="Hawk" img={hawkImg} qty={hawksQty} price="150.00" updateCart={props.updateCart} updateTotal={setHawks}/>
      ): null}
      {songSparrowQty > 0 ? (
          <CartItem name="SongSparrow" img={songSparrowImg} qty={songSparrowQty} price="200.00" updateCart={props.updateCart} updateTotal={setSongSparrows}/>
      ): null}
      {}
    </div>
  );
};

export default ShoppingCart;
