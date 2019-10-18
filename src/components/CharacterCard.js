import React from "react";

export default function CharacterCard(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Gender: {props.gender}</p>
      <img src={props.image}></img>
      <p>Origin: {props.origin.name}</p>
    </div>
  )
}
