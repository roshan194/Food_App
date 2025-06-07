import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./App.css";

const AppLayout = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const resData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setAllRestaurants(resData);
    setFilteredRestaurants(resData); // initialize both with full data
  }

  // filterData helper
  function filterData(searchText, restaurants) {
    return restaurants.filter((restaurant) =>
      restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  // searchData logic
  const searchData = () => {
    if (searchText !== "") {
      const filteredData = filterData(searchText, allRestaurants);
      setFilteredRestaurants(filteredData);
      if (filteredData.length === 0) {
        setErrorMessage("No matching restaurants found.");
      } else {
        setErrorMessage("");
      }
    } else {
      setFilteredRestaurants(allRestaurants);
      setErrorMessage("");
    }
  };

  // don't render cards if data is not yet available
  if (!allRestaurants) return null;

  return (
    <>
      <Header
        searchText={searchText}
        setSearchText={setSearchText}
        onSearch={searchData}
      />
      {errorMessage && <p style={{ color: "red", textAlign: "center" }}>{errorMessage}</p>}
      <Body restaurants={filteredRestaurants} />
      <Footer />
    </>
  );
};

export default AppLayout;
