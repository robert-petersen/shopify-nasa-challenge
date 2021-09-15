import React from "react";
import displayPhoto from "../components/displayPhoto";

const LandingPage = () => {
  return (
    <div>
      <head>
        <h1 className="heading" >NASA Photos</h1>
      </head>
      <section className="about_container">
        <div className="apod_container" >
          <h2>Astronomy Picture of the Day</h2>
          <p>Stop by everyday to see beautiful pictures from NASA's Astronomy Picture of the Day API!</p>
          <button>Todays Picture</button>
        </div>
        <div className="search_container" >
          <h2>Search NASA Photos</h2>
          <p>Search amazing space related photos by dates or by random!</p>
          <button>Search</button>
        </div>
        <div className="likes_container" >
          <h2>Save Your Favorites</h2>
          <p>When you see something you like make sure to click or tap the heart to save it for later!</p>
          <button>My Likes</button>
        </div>
      </section>
      <section className="todays_photo">
        <displayPhoto />
      </section>
    </div>
  )
}

export default LandingPage;
