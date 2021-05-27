import React from "react";
import Menu from "./menu/menu";
import About from "./about/about";
import Contact from "./contact/contact";
import Home from "./home/home";
import { BrowserRouter, Route } from "react-router-dom";

const PageContainer = () => {
  return (
    <>
      <h1>Find Glove</h1>
      <Menu />
      <BrowserRouter>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </BrowserRouter>
    </>
  );
};

export default PageContainer;
