import React, { useState, useEffect } from "react";
import axios from 'axios';
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
    const [character, setCharacter] = useState();

    const id = props.match.params.charID;
    useEffect(() => {
    axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => {
        setCharacter(response.data);
    })
    .catch(error => {
      console.log("The data was not returned", error);
    });
  }, [props.match.params.charID]);

  console.log(character);

  if (!character) {
    return <div>Loading movie information...</div>;
  }

  return (
    <Card>
      <CharImg src={character.image}></CharImg>
      <Identification>Name: {character.name}</Identification>
      <Info>Gender: {character.gender}</Info>
      <Info>Origin: {character.origin.name}</Info>
    </Card>
  )
}