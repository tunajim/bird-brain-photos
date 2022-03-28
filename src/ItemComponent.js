import "./styles/item-listing.css";
import { Link } from "react-router-dom";
import Cart from "./images/shopping-cart.png";
import { useState, useEffect } from "react";
import NoQuantityError from "./NoQuantityError";

const ItemComponent = (props) => {
  console.log(props.item);
  const [quantity, setQuantity] = useState(0);
  const [isActive, setActiveStatus] = useState(false);

  const addToCart = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log(quantity);
    if (quantity > 0) {
      props.updateCart({
        name: props.item.name,
        img: props.item.img,
        price: props.item.price,
        quantity: quantity,
      });
      e.value = 0;
      setQuantity(0);
    } else {
      activateErrorMessage();
    }
  };

  const updateQuantity = (e) => {
    console.log(e.target.value);
    setQuantity(e.target.value);
    console.log(quantity);
  };

  const activateErrorMessage = () => {
    setActiveStatus(true);
    console.log({ isActive });
  };

  const deactivateErrorMessage = (e) => {
    e.preventDefault();
    setActiveStatus(false);
  };

  return (
    <div className="item-container">
      <img
        className="item-img"
        src={props.item.img}
        alt={props.item.name}
      ></img>
      <div className="information">
        <div className="labels">
          <h3 className="name">{props.item.name}</h3>
          <h3 className="price">${props.item.price}</h3>
        </div>
        <form className="quantity-selector">
          <label for="quantity">Qty:</label>
          <input
            onChange={updateQuantity}
            id="quantity"
            type="number"
            placeholder={quantity}
            value={quantity}
            name="quantity"
            min="0"
            pattern="[0-9]+"
            required
          ></input>
          {isActive ? (
            <NoQuantityError deactivateErrorMessage={deactivateErrorMessage} />
          ) : null}
          <button onClick={addToCart}>
            <img
              className="shopping-cart-img"
              src={Cart}
              alt="Add to Cart"
            ></img>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ItemComponent;
