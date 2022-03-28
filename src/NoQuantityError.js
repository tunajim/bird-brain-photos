const NoQuantityError = (props) => {
  return (
    <div className="error-message">
      <p>To add item to cart, quantity must not be 0</p>
      <button className="exit-error-message" onClick={props.deactivateErrorMessage}>
        x
      </button>
    </div>
  );
};

export default NoQuantityError;