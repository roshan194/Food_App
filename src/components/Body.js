import {restaurantList} from "../Utils/config";
import RestaurantCard  from "./RestaurantCard"

const Body = () => {
    return (
      <div className="restaurant-list">
        {restaurantList.map((restaurant) => (
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