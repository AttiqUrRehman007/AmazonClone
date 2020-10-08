import React from "react";
import classes from "./Product.module.css";

function Product() {
  return (
    <div className={classes.Product}>
      <div className={classes.info}>
        <p>The lean Startup</p>
        <p className={classes.price}>
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className={classes.rating}>
          <p>
            <span role="img" aria-label="start">
              ⭐
            </span>
          </p>
          <p>
            <span role="img" aria-label="start">
              ⭐
            </span>
          </p>
          <p>
            <span role="img" aria-label="start">
              ⭐
            </span>
          </p>
        </div>
      </div>
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
        alt="the lean Startup"
      />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
