
import RestaurantCard  from "./RestaurantCard"
import ShimmerCard from "./ShimmerCard"; 

const Body = ({ restaurants }) => {
  const isLoading = !restaurants || restaurants.length === 0;

  return (
    <div className="restaurant-list">
      {isLoading
        ? Array(10).fill(0).map((_, index) => <ShimmerCard key={index} />)
        : restaurants.map((restaurant) => (
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
