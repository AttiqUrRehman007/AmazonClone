import React from "react";
import classes from "./App.module.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <Home />
    </div>
  );
}

export default App;
