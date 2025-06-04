import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { restaurantList } from "./Utils/config";
import css from "./App.css";





const AppLayout = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);

  function filterData() {
    if (searchText.trim() === "") {
      // If search is empty, reset to original full list
      setRestaurants(restaurantList);
    } else {
      const data = restaurantList.filter((restaurant) =>
        restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setRestaurants(data);
    }
  }
  

  return (
    <>
      <Header
        searchText={searchText}
        setSearchText={setSearchText}
        onSearch={filterData}
      />
      <Body restaurants={restaurants} />
      <Footer />
    </>
  );
};

export default AppLayout;