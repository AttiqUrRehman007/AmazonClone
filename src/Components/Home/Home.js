import React from "react";
import classes from "./Home.module.css";
import Product from "../Product/Product";

function Home() {
  return (
    <div className={classes.Home}>
      <div className={classes.container}>
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className={classes.row}>
          <Product />
          {/* Product */}
        </div>
        <div className={classes.row}>
          {/* Product */}
          {/* Product */}
          {/* Product */}
        </div>
        <div className={classes.row}>{/* Product */}</div>
      </div>
    </div>
  );
}

export default Home;
