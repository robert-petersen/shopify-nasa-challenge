import React, { useEffect, useState } from "react";
import {Link as LinkR} from "react-router-dom";
import {Link as LinkS} from "react-scroll";
import axios from "axios";
import PhotoDisplay from "../components/PhotoDisplay";

const LandingPage = ({ apod, setApod, liked, setLiked }) => {
  const [ isFetching, setIsFetching ] = useState(false);

  const getAPOD = () => {
    setIsFetching(true);
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`)
    .then((res) => setApod(res.data))
    .catch((err) => console.log("error", err));
    setIsFetching(false);
  }

  useEffect(() => {
    // getAPOD();
  }, []);

  return (
    <div>
      <header>
        <h1 className="heading" >NASA Photos</h1>
      </header>
      <section className="about_container">
        <div className="apod_container" >
          <h2>Astronomy Picture of the Day</h2>
          <p>Stop by everyday to see beautiful pictures from NASA's Astronomy Picture of the Day API!</p>
          <LinkS 
            to="apod"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={0}
          >Todays Picture</LinkS>
        </div>
        <div className="search_container" >
          <h2>Search NASA Photos</h2>
          <p>Search amazing space related photos by dates or by random!</p>
          <LinkR to="/search">Search</LinkR>
        </div>
        <div className="likes_container" >
          <h2>Save Your Favorites</h2>
          <p>When you see something you like make sure to click or tap the heart to save it for later!</p>
          <LinkR to="/likes">My Likes</LinkR>
        </div>
      </section>
      <section className="todays_photo" id="apod" >
        <h1>Astronomy Picture of the Day</h1>
        { isFetching ? <h2>Fetching Photo Now</h2> : "" }
        { 
          apod.date == null ? <h2>Error</h2> : 
          <PhotoDisplay photoObject={apod} liked={liked} setLiked={setLiked} /> 
        }
      </section>
    </div>
  )
}

export default LandingPage;
