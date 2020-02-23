import React from 'react';
import styled from 'styled-components';
import { Game, Heading } from './components';

const App = () => {
  return (
    <>
      <Heading>Conway's Game of Life</Heading>
      <StyledLink target="_blank" href="https://github.com/zachweinberg/game-of-life">
        View Code
      </StyledLink>
      <Game />
    </>
  );
};

const StyledLink = styled.a`
  display: block;
  text-align: center;
  color: #333;
  margin-bottom: 1rem;
`;

export default App;
