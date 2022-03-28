import "./styles/cart-item.css";
import { useState, useEffect } from "react";
import Select from "react-select";

const CartItem = (props) => {
  console.log(props);
  const [qty, setQty] = useState(props.qty);

  useEffect(() => {

  })

  const options = [];
  for (let i = 0; i < 10; i++) {
    options.push({value: i, label: i});
  }

  const updateQty = (e) => {
      console.log(e);
        props.updateCart(props.name, props.img, props.price, qty);
        props.updateTotal(qty);
        setQty(e.value);
  }

  const optionList = options.map((num) => {
      return <option>{num}</option>;
  });

  return (
    <div className="cart-item-container">
      <h2 className="cart-item-name">{props.name}</h2>
      <img className="cart-item-img" src={props.img}></img>
      {/* <label for="quantity">Qty:</label> */}
      <label for="quantity">Qty:{qty}</label>
      <Select placeholder={qty} value={qty} options={options} onChange={updateQty}/>
      {/* <Select
        name="quantity"
        id="quantity"
        className="cart-item-qty"
        value={qty}
        onChange={updateQty}
      >
        <option value={0}>0</option>
        {optionList}
      </select> */}
      <h2 className="price">${props.qty * props.price}</h2>
    </div>
  );
};

export default CartItem;
