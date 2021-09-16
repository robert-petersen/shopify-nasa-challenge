import React, {useEffect} from "react";
import PhotoDisplay from "../components/PhotoDisplay";

const LikesPage = ({ liked, setLiked }) => {
  useEffect(() => {
    console.log("liked", liked);
  }, []);

  return (
    <section>
      <h1>My Liked Photos</h1>
      { 
        liked.length === 0 ? <h2>You have no liked photos yet :(</h2> : 
        liked.map((likedPhoto) => <PhotoDisplay photoObject={likedPhoto} liked={liked} setLiked={setLiked} />)
      }
    </section>
  )
}

export default LikesPage;
