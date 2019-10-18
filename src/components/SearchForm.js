import React, { useState } from "react";

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
      <form onSubmit={submitForm}>
        <input name="search" id="search" type="text" placeholder="Search by name" value={search} onChange={changeHandler}/>
        <button type="submit">Search</button>
      </form>
    </section>
  );
}
