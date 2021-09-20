import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { BsImages } from "react-icons/bs";

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
    <div className="photo_card" >
      <h2>{photoObject.date}</h2>
      <img src={photoObject.url} alt={photoObject.title} />
      <h3>{photoObject.title}</h3>
      <p>{photoObject.explanation}</p>
      <div className="icon_container" >
        <button onClick={toggleLike}>
          <FaHeart className={`icon ${ isLiked  ? "liked" : "" }`}/>
        </button>
        <a href={photoObject.hdurl} target="_blank" rel="noreferrer"><BsImages className="icon" /></a>
      </div>
    </div>
  )
}

export default PhotoDisplay;
