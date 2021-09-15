import React from "react";
import { FaHeart, FaHeartBroken } from "react-icons/fa";

const displayPhoto = () => {
  return (
    <div>
      <h2>Photo Date</h2>
      <h3>Photo Title</h3>
      <img src="" alt="" />
      <p>Photo Description</p>
      <a href="#" target="_blank" rel="noreferrer">HD Img</a>
      <button>
        <FaHeart className="like_icon"/>
      </button>
    </div>
  )
}

export default displayPhoto;
