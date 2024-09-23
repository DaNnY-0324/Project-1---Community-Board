import React from "react";

const RestaurantCard = ({
  name,
  address,
  phone,
  menu,
  image,
  rating,
  reviews,
  price,
}) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-content">
        <p>
          <strong>Address:</strong> {address}
        </p>
        <p>
          <strong>Phone:</strong> {phone}
        </p>
        <p>
          <strong>Rating:</strong> {rating} stars
        </p>
        <p>
          <strong>Reviews:</strong> {reviews}
        </p>
        <p>
          <strong>Price:</strong> {price}
        </p>
        <a href={menu} target="_blank" rel=" noopener noreferrer">
          Visit Menu
        </a>
      </div>
    </div>
  );
};

export default RestaurantCard;
