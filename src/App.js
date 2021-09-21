import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import SearchPage from "./views/SearchPage";
import LikesPage from "./views/LikesPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  const [ apod, setApod ] = useState({});
  const [ searchResults, setSearchResults ] = useState([]);
  const [ liked, setLiked ] = useState([]);

  return (
    <Router>
      <NavBar />
      <Switch>

        <Route path="/" exact>
          <LandingPage 
            apod={apod} 
            setApod={setApod} 
            liked={liked} 
            setLiked={setLiked} 
          />
        </Route>

        <Route path="/search" exact>
          <SearchPage 
            searchResults={searchResults}
            setSearchResults={setSearchResults}
            liked={liked} 
            setLiked={setLiked}
          />
        </Route>

        <Route path="/likes" exact>
          <LikesPage 
            liked={liked} 
            setLiked={setLiked}
          />
        </Route>

      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
