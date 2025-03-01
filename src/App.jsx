import React from "react";
import Header from "./Components/Header/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
  <>
    <Header></Header>
    <Outlet></Outlet>
  </>
);
};

export default App;
