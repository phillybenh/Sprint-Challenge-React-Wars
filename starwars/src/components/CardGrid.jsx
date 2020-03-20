import React from "react";
import CharacterCard from "./CharacterCard"

export default function CardGrid(props) {
//   console.log(props.characters);


return (
  <div>
    {props.characters.map((item, index) => {
      return (
        <CharacterCard
          key={index}
          item={item}
        />
      );
    })}
  </div>
);


}


