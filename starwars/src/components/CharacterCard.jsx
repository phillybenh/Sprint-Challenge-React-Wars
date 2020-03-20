import React from "react";
import styled from "styled-components"

//Styles
const Card = styled.section`
  background: black;
  color: yellow;
  width: 225px;
  max-height: 300px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // align-items: flex-start;
  text-align: left;
  padding: 10px;
  margin: 10px;
`;
const List = styled.ul`
padding:10px;
margin: 0 20px;
`;
const Para = styled.p`
margin-bottom: 0px;
`;


//Function
export default function CharacterCard(props) {
  // console.log(props.item)
  const data = props.item;
  return (
    <Card>
      <h2>{data.name}</h2>
      <Para>Character Data:</Para>
      <List>
        <li>Birth Year: {data.birth_year}</li>
        <li>Gender: {data.gender}</li>
        <li>Eye Color: {data.eye_color}</li>
        <li>Hair Color: {data.hair_color}</li>
        <li>Height: {data.height}cm</li>
      </List>
    </Card>
  );
}
