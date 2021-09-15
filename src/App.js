import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import SearchPage from "./views/SearchPage";
import LikesPage from "./views/LikesPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Switch>
        <NavBar />
        <Route path="/" component={LandingPage} exact />
        <Route path="/search" component={SearchPage} exact />
        <Route path="/likes" component={LikesPage} exact />
        <Footer />
      </Switch>
    </Router>
  );
}

export default App;
