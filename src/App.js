import React from "react";
import { Route, Link } from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList.js";
import Character from "./components/Character.js"
import styled from 'styled-components';
import "./index.css";

const MainBG = styled.main`
  background-color: black;
`;

export default function App() {
  return (
    <MainBG>
      <Header />
      <div className="nav-links">
          <Link to="/">Home</Link> <br />
          <Link to="/character-list">Character List</Link>
        </div>
      <div className="routes">
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/character-list" component={CharacterList} />
        <Route exact path="/character-list/:charID" component={Character} />
      </div>
    </MainBG>
  );
}
