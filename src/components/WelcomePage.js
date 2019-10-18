import React from "react";
import styled from 'styled-components';

const Welcome = styled.h1`
@import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');
font-family: 'Press Start 2P', cursive;
font-size: 1.5rem;
`;

const WelcomeImg = styled.img`
  border-radius: 1em;
  border: 2px solid limegreen;
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <Welcome>Welcome to the ultimate fan site!</Welcome>
        <WelcomeImg
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </section>
  );
}
