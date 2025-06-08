import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { RestaurantContext } from "./components/RestaurantContext";
import "./App.css";

const AppLayout = () => {
  const { searchText, setSearchText, searchData, errorMessage } =
    useContext(RestaurantContext);

  return (
    <>
      <Header
        searchText={searchText}
        setSearchText={setSearchText}
        onSearch={searchData}
      />
      {errorMessage && (
        <p style={{ color: "red", textAlign: "center" }}>{errorMessage}</p>
      )}
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
