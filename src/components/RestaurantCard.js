import '@fortawesome/fontawesome-free/css/all.min.css';

const IMG_CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";


const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    areaName,
    lastMileTravelString,
    costForTwo,
    avgRatingString,
  }) => {
    return (
      <div className="card">
        <img src={IMG_CDN_URL + cloudinaryImageId} alt="Restaurant" />
        <h2>{name}</h2>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{areaName}</h4>
        <span>
          <h4>
            <i className="fa-solid fa-star"></i>
            {avgRatingString}
          </h4>
          <h4>{lastMileTravelString}</h4>
          <h4>{costForTwo}</h4>
        </span>
      </div>
    );
  };

  export default RestaurantCard;
  
  