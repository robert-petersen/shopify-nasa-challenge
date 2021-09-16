import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../State/actions/index";
import { FaHeart } from "react-icons/fa";

const PhotoDisplay = ({ photoObject }) => {
  const { likes } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { removeLike, addLike } = bindActionCreators(actionCreators, dispatch);

  const toggleLike = evt => {
    evt.preventDefault();
    if ( likes.includes(photoObject, 0) === true ) {
      removeLike(photoObject);
    } else {
      addLike(photoObject);
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
        <FaHeart className={`like_icon ${ likes !== null && likes.includes(photoObject, 0) ? ".liked" : "" }`}/>
      </button>
    </div>
  )
}

export default PhotoDisplay;
