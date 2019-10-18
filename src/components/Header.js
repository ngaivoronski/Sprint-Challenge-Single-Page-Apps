import React from "react";
import styled from 'styled-components';
import "../stylesheet.css";

const HTitle = styled.h1`
  font-family: 'get_schwiftyregular';
  font-size: 4rem;
  color: lightblue;
   -webkit-text-fill-color: rgb(37, 137, 250); /* Will override color (regardless of order) */
   -webkit-text-stroke-width: .001em;
   -webkit-text-stroke-color: rgba(84, 255, 78, 1);
`;

export default function Header() {
  return (
    <header className="ui centered">
      <HTitle>Rick and Morty Fan Page</HTitle>
    </header>
  );
}
