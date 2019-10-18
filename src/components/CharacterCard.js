import React from "react";
import styled from 'styled-components';

const Card = styled.div`
background-color: rgba(27, 27, 27, 0.9);
padding: 1em;
margin: 1em;
border-radius: 1em;
`;

const Identification = styled.h2`
@import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');
font-family: 'Press Start 2P', cursive;
font-size: 2rem;
`;

const Info = styled.p`
@import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');
font-family: 'Press Start 2P', cursive;
font-size: 1rem;
`;

const CharImg = styled.img`
  border-radius: 1em;
  border: 2px solid limegreen;
`;

export default function CharacterCard(props) {
  return (
    <Card>
      <CharImg src={props.image}></CharImg>
      <Identification>Name: {props.name}</Identification>
      <Info>Gender: {props.gender}</Info>
      <Info>Origin: {props.origin.name}</Info>
    </Card>
  )
}
