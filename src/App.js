import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import css from "./App.css";




const AppLayout = () => {
  console.log("Rendering AppLayout");
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

export default AppLayout;