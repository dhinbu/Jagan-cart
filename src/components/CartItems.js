import React from "react";
import classes from "./cartItems.module.css";

const CartItems = ({ cart: selected }) => {
  const calculateTotalAmount = () => {
    return selected.reduce(
      (total, item) => parseInt(total + item.quantity * item.price),
      0
    );
  };

  return (
    <div className={classes.container}>
      <h3>Selected Items</h3>
      {selected &&
        selected.map((item) => (
          <div key={item.id} className={classes.cart}>
            <img className={classes.image} src={item.image} alt={item.title} />
            <p>
              {item.title.length < 10
                ? item.title
                : item.title.slice(0, 10) + "..."}
            </p>
            <p>Qty : {item.quantity}</p>
          </div>
        ))}
      <div>Total : {calculateTotalAmount()}</div>
    </div>
  );
};

export default CartItems;
