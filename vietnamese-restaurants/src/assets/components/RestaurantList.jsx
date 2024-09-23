import React from "react";
import RestaurantCard from "./RestaurantCard";
import restaurants from "./data/restaurants";

const RestaurantList = () => {
  return (
    <div className="restaurant-list">
      {restaurants.map((restaurant, index) => (
        <RestaurantCard key={index} {...restaurant} />
      ))}
    </div>
  );
};

export default RestaurantList;
