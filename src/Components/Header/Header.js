import React from "react";
import classes from "./Header.module.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Header() {
  return (
    <div className={classes.Header}>
      <img
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="amazon logo"
      />
      <div className={classes.search}>
        <input type="text" />
        <SearchIcon className={classes.SearchIcon} />
      </div>
      <div className={classes.nav}>
        <div className={classes.options}>
          <span className={classes.lineOne}>Hello, Attiq</span>
          <span className={classes.lineTwo}>Sign in</span>
        </div>
        <div className={classes.options}>
          <span className={classes.lineOne}>Returns</span>
          <span className={classes.lineTwo}>& Orders</span>
        </div>
        <div className={classes.options}>
          <span className={classes.lineOne}>Your</span>
          <span className={classes.lineTwo}>Prime</span>
        </div>
        <div className={classes.optionsBasket}>
          <ShoppingCartIcon />
          <span className={`${classes.lineTwo} ${classes.basketCount}`}>0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
