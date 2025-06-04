
import RestaurantCard  from "./RestaurantCard"

const Body = ({ restaurants }) => {
  return (
    <div className="restaurant-list">
      {restaurants?.length > 0 &&
        restaurants.map((restaurant) => (
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