import React, { useState } from "react";

function ListingCard({ listing, onDeleteListing }) {
  const { id, description, location, image } = listing;
  const [likes, updateLikes] = useState(false);

  function likeFunction() {
    updateLikes((likes) => !likes)
  }

  function handleDelete() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        onDeleteListing(id)
      });
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {likes ? (
          <button className="emoji-button favorite active" onClick={likeFunction}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={likeFunction}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
