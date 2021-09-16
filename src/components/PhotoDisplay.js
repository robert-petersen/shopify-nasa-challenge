import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";

const PhotoDisplay = ({ photoObject, liked, setLiked }) => {
  const [ isLiked, setIsLiked ] = useState(false);

  const findIfLiked = () => {
    console.log("liked", liked);
    if ( liked.includes(photoObject, 0) ) {
      setIsLiked(true);
    }
  }

  useEffect(() => {
    findIfLiked();
    console.log("isliked", isLiked)
  }, [liked]);

  const toggleLike = evt => {
    evt.preventDefault();
    console.log("button hit", liked);
    if ( isLiked ) {
      console.log("is liked orig", liked);
      setLiked(liked.filter((likedPhoto) => likedPhoto.date !== photoObject.date));
      setIsLiked(false);
      console.log("result", liked);
    } else {
      console.log("not liked orig", liked);
      setLiked([
        ...liked,
        photoObject
      ])
      setIsLiked(true);
      console.log("results", liked);
    }
  }

  return (
    <div>
      <h2>{photoObject.date}</h2>
      <img src={photoObject.url} alt={photoObject.title} />
      <h3>{photoObject.title}</h3>
      <p>{photoObject.explanation}</p>
      <a href={photoObject.hdurl} target="_blank" rel="noreferrer">HD Img</a>
      <button onClick={toggleLike}>
        <FaHeart className={`like_icon ${ isLiked  ? ".liked" : "" }`}/>
      </button>
    </div>
  )
}

export default PhotoDisplay;
