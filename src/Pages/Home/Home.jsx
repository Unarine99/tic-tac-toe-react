import React from 'react';
import { Container, Title, Subtitle } from '../../styles/General.styled';
import Button from '../../components/Button/Button';
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Container>
        <Title>TicTacToe</Title>
        <Subtitle>Play with your friends, higher score wins.</Subtitle>
        <Button onClick = {() => navigate ("/game-on")}>Play Now</Button>
      </Container>
    </div>
  )
}

export default Home
