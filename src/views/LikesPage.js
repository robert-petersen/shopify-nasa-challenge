import React, {useEffect} from "react";
import PhotoDisplay from "../components/PhotoDisplay";

const LikesPage = ({ liked, setLiked }) => {
  useEffect(() => {
    console.log("liked", liked);
  }, []);

  return (
    <section className="likes" >
      <div className="banner" >
        <h1>My Liked Photos</h1>
        <div className="banner_fade"></div>
      </div>
      <div className="liked_container" >
        { 
          liked.length === 0 ? <h2 className="no_likes" >You have no liked photos yet :(</h2> : 
          liked.map((likedPhoto) => <PhotoDisplay photoObject={likedPhoto} liked={liked} setLiked={setLiked} />)
        }
      </div>
    </section>
  )
}

export default LikesPage;
