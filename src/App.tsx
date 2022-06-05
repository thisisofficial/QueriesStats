import React from "react";
import "./App.css";
import styled from "styled-components";
import main from "./images/image-header-desktop.jpg";

const Contenedor = styled.div`
  width: 1110px;
  height: 446px;
  background-color: #1b1937;
  border-radius: 8px; 
  display: gird;
  justify-content: center;
  @media (max-width: 800px){
    width: 327px;
    height: 780px;
    margin: 88px 24px;

`;

const TextContainer = styled.div`
display: inline-block;
position: absolute;
padding-top: 50px;
padding-left: 50px;

@media (max-width: 800px){
    padding-top: 275px;
}
`;

const Title = styled.h1`
  font-family: "Inter", sans-serif;
  color: #ffffff;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
`;

const Black = styled.b`
  color: blueviolet;
`;

const Text = styled.p`
font-family: 'Inter', sans-serif;
font-size: 15px;
line-height: 25px;
color: #868495;
margin: 20px 0px 35px 0px;
font-weight: 400;
@media (max-width: 800px){
    font-size: 15px;
    text-align: center;
    width: 264px;
    height: 100px;
    padding-left: 32px;
    margin: 0px;
}
`;

const Numbers = styled.span`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
  padding-right: 87px;
`;

const InfoContainer = styled.div`
  box-sizing: border-box;
  
`;

const Info = styled.span`
  font-family: "Lexend Deca", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 25px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.6;
  padding-top: 10px;
  padding-right: 68px;
`;

const ImageContainer = styled.div`
  float: right;
  width: 874px;
  height: 582;
  padding: 0px 0px 100px 374px;
  @media (max-width: 800px){
      padding: 0px;
      width: 327px;
      height: 240px;
      margin-bottom: 20px;
  }

`

const Image = styled.img`
position: absolute;
width: 500px;
height: 446px;
background: #AB5CDB;
opacity: 0.75;
mix-blend-mode: multiply;
/* background-image: url(); */
@media (max-width: 800px){
    width: 327px;
    height: 240px;
    display: flex;
}
`;

function App() {
  return (
    <div className="App">
      <Contenedor>

        <ImageContainer>
          <Image src={main}/>
        </ImageContainer>
      
        <TextContainer>
          <Title>
            Get <Black>insights </Black> that help <br />
            your business grow.
          </Title>
          <Text>
            Discover the benefits of data analytics and make <br />
            better decisions regarding revenue, customer <br />
            experience, and overall efficiency.
          </Text>
          <Numbers> 10k+</Numbers>
          <Numbers> 314</Numbers>
          <Numbers>12M+</Numbers>

          <InfoContainer>
            <Info> Companies</Info>
            <Info>Templates</Info>
            <Info>Queries</Info>
          </InfoContainer>
        </TextContainer>

      </Contenedor>
    </div>
  );
}

export default App;
