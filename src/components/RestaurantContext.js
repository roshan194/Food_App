// src/context/RestaurantContext.js
import { createContext, useState, useEffect } from "react";

export const RestaurantContext = createContext();

export const RestaurantProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const resData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setAllRestaurants(resData);
    setFilteredRestaurants(resData);
  };

  const filterData = (searchText, restaurants) => {
    return restaurants.filter((restaurant) =>
      restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

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

  return (
    <RestaurantContext.Provider
      value={{
        searchText,
        setSearchText,
        allRestaurants,
        filteredRestaurants,
        setFilteredRestaurants,
        errorMessage,
        searchData,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
