import "./styles/home.css";
import { useState } from "react";
import geese from "./images/Geese.jpg";
import hawk from "./images/hawk.jpg";
import songSparrow from "./images/song-sparrow.jpg";
import ItemComponent from "./ItemComponent.js";

function Home(props) {
  const productArr = [
    { name: "Geese", img: geese, price: 99.99 },
    { name: "Hawk", img: hawk, price: 150.0 },
    { name: "Song Sparrow", img: songSparrow, price: 200.0 },
  ];
  const [itemArr, addItem] = useState(["products"]);
  //   addItem(itemArr.concat("products"));
  return (
    <div className="container">
      <ul>
        <li>
          <ItemComponent item={productArr[0]} updateCart={props.addToCart}/>
        </li>
        <li>
          <ItemComponent item={productArr[1]} updateCart={props.addToCart}/>
        </li>
        <li>
          <ItemComponent item={productArr[2]} updateCart={props.addToCart}/>
        </li>
      </ul>
    </div>
  );
}

export default Home;
