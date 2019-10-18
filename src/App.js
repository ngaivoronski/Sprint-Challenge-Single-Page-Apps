import React from "react";
import { Route, Link } from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList.js";


export default function App() {
  return (
    <main>
      <Header />
      <div className="nav-links">
          <Link to="/">Home</Link> <br />
          <Link to="/character-list">Character List</Link>
        </div>
      <div className="routes">
        <Route exact path="/" component={WelcomePage} />
        <Route path="/character-list" component={CharacterList} />
      </div>
    </main>
  );
}
