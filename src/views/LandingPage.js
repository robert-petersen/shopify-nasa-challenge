import React, { useEffect, useState } from "react";
import {Link as LinkR} from "react-router-dom";
import {Link as LinkS} from "react-scroll";
import axios from "axios";
import PhotoDisplay from "../components/PhotoDisplay";
import APODPhoto from "../images/undraw_relaunch_day_902d.svg";
import LikePhoto from "../images/undraw_Loving_it_re_jfh4.svg";
import SearchPhoto from "../images/undraw_Web_search_re_efla.svg";

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
    <div className="landing_container">
      <header>
        <h1 className="heading" >NASA Photos</h1>
        <h2 className="heading_desc">Brought to you by NASA's Astronomy Picture of the Day API </h2>
        <div className="heading_fade"></div>
      </header>
      <section className="about_container">
        <div className="card apod_container" >
          <img className="card_pic" src={APODPhoto} alt="rocket launch at night" />
          <div className="card_content">   
            <h2>Astronomy Picture of the Day</h2>
            <p>Stop by everyday to see beautiful pictures from NASA's Astronomy Picture of the Day API!</p>
          </div>
          <LinkS 
            className="card_link" 
            to="apod"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={0}
          >Todays Picture</LinkS>
        </div>
        <div className="card search_container" >
          <img className="card_pic" src={SearchPhoto} alt="rocket launch at night" />
          <div className="card_content">
            <h2>Search NASA Photos</h2>
            <p>Search amazing space related photos by dates or by random!</p>
          </div>
          <LinkR className="card_link" to="/search">Search</LinkR>
        </div>
        <div className="card likes_container" >
          <img className="card_pic" src={LikePhoto} alt="rocket launch at night" />
          <div className="card_content">
            <h2>Save Your Favorites</h2>
            <p>When you see something you like make sure to click or tap the heart to save it for later!</p>
          </div>
          <LinkR className="card_link" to="/likes">My Likes</LinkR>
        </div>
      </section>
      <section className="todays_photo" id="apod" >
        <h1 className="apod_title">Astronomy Picture of the Day</h1>
        { isFetching ? <h2 className="fetching_state" >Fetching Photo Now</h2> : "" }
        { 
          apod.date == null ? <h2 className="fetching_state" >Error</h2> : 
          <PhotoDisplay photoObject={apod} liked={liked} setLiked={setLiked} /> 
        }
      </section>
    </div>
  )
}

export default LandingPage;
