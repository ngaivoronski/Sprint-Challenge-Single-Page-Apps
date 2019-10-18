import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import {Route, NavLink} from 'react-router-dom';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [originalList, setOriginalList] = useState([]);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get("https://rickandmortyapi.com/api/character/")
    .then(response => {
      console.log(response.data.results);
      setCharacters(response.data.results);
      setOriginalList(response.data.results);
    })
    .catch(error => {
      console.log("The data was not returned", error);
    });
  }, []);

  const searchByName = prompt => {
    var newList = [];
    if (prompt != "") {
      for (var [index, character] of characters.entries()) {
        if (character.name.includes(prompt)) {
          newList.push(character);
        }
      }
      setCharacters(newList);
    } else {
      setCharacters(originalList);
    }
  }

  return (
    <>
    <SearchForm searchByName={searchByName}/>
    <section className="character-list">
      {characters.map(character => {
        return (
          <>
          <CharacterCard
          name={character.name}
          gender={character.gender}
          image={character.image}
          origin={character.origin}
          
          />
          <NavLink to={`/character-list/${character.id}`}>Details</NavLink>
          </>
        )
      })}
    </section>
    </>
  );
}
