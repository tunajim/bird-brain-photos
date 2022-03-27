import "./styles/home.css";
import "./styles/images.css";
import { useState } from "react";
import geese from "./images/Geese.jpg";

function Home() {
    const productArr = [{name : "geese", img : geese, price : 99.99}]
  const [ itemArr, addItem ] = useState(["products"]);
//   addItem(itemArr.concat("products"));
  return (
      <div className="container">
          <ul>
              <li><img src={productArr[0].img}></img></li>
          </ul>
      </div>
  );
}

export default Home;
