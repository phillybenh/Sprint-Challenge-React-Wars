import React from "react";
import CharacterCard from "./CharacterCard"
import styled from "styled-components";

//style
const CardContainer = styled.div`
margin: 10px;
width: 100%;
padding: 4%;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
`;

//function
export default function CardGrid(props) {
//   console.log(props.characters);


return (
  <CardContainer>
    {props.characters.map((item, index) => {
      return <CharacterCard key={index} item={item} />;
    })}
  </CardContainer>
);


}


