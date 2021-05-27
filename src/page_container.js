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
      <BrowserRouter>
        <Menu />
        <Route exact path="/" component={
          Home
        }/>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </BrowserRouter>
    </>
  );
};

export default PageContainer;
