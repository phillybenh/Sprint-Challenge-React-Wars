import React from "react";

export default function CharacterCard(props) {
  // console.log(props.item)
  const data = props.item;
  return (
    <div>
      <h2>{data.name}</h2>
      <p>Character Data:</p>
      <ul>
        <li>Birth Year: {data.birth_year}</li>
        <li>Gender: {data.gender}</li>
        <li>Eye Color: {data.eye_color}</li>
        <li>Hair Color: {data.birth_year}</li>
        <li>Height: {data.height}cm</li>
      </ul>
    </div>
  );
}
