import React, { useState } from "react";
import styled from 'styled-components';

const SearchField = styled.input`
border: 2px solid white;
background-color: white;
border-radius: .2em;
margin: 1em;
width: 20em;
height: 1.5em;
`;

const SearchButton = styled.button`
margin: 1em;
background-color: white;
border-radius: .2em;
margin: 1em;
width: 8em;
height: 2em;
@import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');
font-family: 'Press Start 2P', cursive;
`;

export default function SearchForm(props) {
  
  const [search, setSearch] = useState("");

  const changeHandler = event => {
    var letter = event.target.value;
    setSearch(letter);
  }

  const submitForm = event => {
    event.preventDefault();
    props.searchByName(search);
  };

  return (
    <section className="search-form">
      <form  onSubmit={submitForm}>
        <SearchField name="search" id="search" type="text" placeholder="Search by name" value={search} onChange={changeHandler}/>
        <SearchButton type="submit">Search</SearchButton>
      </form>
    </section>
  );
}
