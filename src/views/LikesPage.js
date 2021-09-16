import React from "react";
import { useSelector } from "react-redux";
import PhotoDisplay from "../components/PhotoDisplay";

const LikesPage = () => {
  const { likes } = useSelector((state) => state);
  console.log("likes: ", likes)

  return (
    <section>
      <h1>My Liked Photos</h1>
      { 
        likes == null ? <h2>You have no liked photos yet :(</h2> : 
        likes.map((liked) => <PhotoDisplay photoObject={liked} />)
      }
    </section>
  )
}

export default LikesPage;
