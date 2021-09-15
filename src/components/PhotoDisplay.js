import React from "react";
import { FaHeart } from "react-icons/fa";

const displayPhoto = ({ photoObject }) => {
  return (
    <div>
      <h2>{photoObject.date}</h2>
      <img src={photoObject.url} alt={photoObject.title} />
      <h3>{photoObject.title}</h3>
      <p>{photoObject.explanation}</p>
      <a href={photoObject.hdurl} target="_blank" rel="noreferrer">HD Img</a>
      <button>
        <FaHeart className="like_icon"/>
      </button>
    </div>
  )
}

export default displayPhoto;
