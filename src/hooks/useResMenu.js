import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  FOODFIRE_MENU_API_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
} from "../Utils/config";

const useResMenu = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, [resId]); // dependency for dynamic resId

  const getRestaurantInfo = async () => {
    try {
      const data = await fetch(`${FOODFIRE_MENU_API_URL}${resId}`);
      const json = await data.json();

      // Extract restaurant info
      const restaurantInfo = json?.data?.cards
        ?.map((x) => x.card)
        ?.find((x) => x?.card?.["@type"] === RESTAURANT_TYPE_KEY)?.card?.info;

      setRestaurant(restaurantInfo || null);

      // Extract menu items
      const menuItemsData =
        json?.data?.cards
          ?.find((x) => x?.groupedCard)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards
          ?.map((x) => x.card?.card)
          ?.filter((x) => x?.["@type"] === MENU_ITEM_TYPE_KEY)
          ?.map((x) => x.itemCards)
          .flat()
          ?.map((x) => x.card?.info) || [];

      // Remove duplicate items (based on id)
      const uniqueMenuItems = [];
      menuItemsData.forEach((item) => {
        if (!uniqueMenuItems.find((x) => x.id === item.id)) {
          uniqueMenuItems.push(item);
        }
      });

      setMenuItems(uniqueMenuItems);
    } catch (error) {
      console.error("Failed to fetch restaurant menu:", error);
      setRestaurant(null);
      setMenuItems([]);
    }
  };

  // Return data from the hook
  return { restaurant, menuItems };
};

export default useResMenu;
