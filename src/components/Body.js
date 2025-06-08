import { useContext } from "react";
import { RestaurantContext } from "./RestaurantContext";
import RestaurantCard from "./RestaurantCard";
import ShimmerCard from "./ShimmerCard";

const Body = () => {
  const { filteredRestaurants } = useContext(RestaurantContext); // ✅ Called at top level

  const isLoading = !filteredRestaurants || filteredRestaurants.length === 0;

  return (
    <div className="restaurant-list">
      {isLoading
        ? Array(10).fill(0).map((_, index) => <ShimmerCard key={index} />)
        : filteredRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.info.id}
              {...restaurant.info}
              lastMileTravelString={restaurant.info.sla.lastMileTravelString}
            />
          ))}
    </div>
  );
};

export default Body;
