import React, { useState } from "react";
import classes from "./itemsList.module.css";
import { Link } from "react-router-dom";
import CartItems from "./CartItems";

const ProductListing = ({ items }) => {
  const [selected, setSelected] = useState([]);

  const inc = (item) => {
    const selectedIndex = selected.findIndex(
      (selectedItem) => selectedItem.id === item.id
    );

    if (selectedIndex === -1) {
      setSelected([...selected, { ...item, quantity: 1 }]);
    } else {
      const updatedSelected = [...selected];
      updatedSelected[selectedIndex].quantity += 1;
      setSelected(updatedSelected);
    }
  };

  const dec = (item) => {
    const selectedIndex = selected.findIndex(
      (selectedItem) => selectedItem.id === item.id
    );

    if (selectedIndex !== -1) {
      const updatedSelected = [...selected];
      if (updatedSelected[selectedIndex].quantity === 1) {
        updatedSelected.splice(selectedIndex, 1);
      } else {
        updatedSelected[selectedIndex].quantity -= 1;
      }
      setSelected(updatedSelected);
    }
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.cartContainer}>
        {Array.isArray(items) &&
          items.map((item) => (
            <div key={item?.id} className={classes.container}>
              <div className={classes.tile}>
                <Link className={classes.main} to={`/item/${item.id}`}>
                  <img
                    className={classes.poster}
                    src={item.image}
                    alt={item.title}
                  />
                  <div style={{ width: "100%", height: "15px" }}>
                    <p className={classes.title}>
                      {item.title.length < 10
                        ? item.title
                        : item.title.slice(0, 10) + "..."}
                    </p>
                    <p className={classes.rating}>({item.rating.rate})</p>
                  </div>
                  <p className={classes.description}>
                    {item?.description?.slice(0, 30) + "..."}
                  </p>
                  <p className={classes.description}>Price : {item.price}</p>
                </Link>
                <div className={classes.actions}>
                  <button className={classes.btn} onClick={() => dec(item)}>
                    -
                  </button>
                  <p>
                    Qty :{" "}
                    {selected.find((q) => q.id === item.id)?.quantity || 0}
                  </p>
                  <button className={classes.btn} onClick={() => inc(item)}>
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>

      <CartItems className={classes.cart} cart={selected} />
    </div>
  );
};

export default ProductListing;
