import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import css from "./App.css";





const AppLayout = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([]);


  useEffect(()=> {
    getRestaurants();
  },[]);

  async function getRestaurants(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    setRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  function filterData() {
    if (searchText.trim() === "") {
      // If search is empty, reset to original full list
      setRestaurants(restaurants);
    } else {
      const data = restaurants.filter((restaurant) =>
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