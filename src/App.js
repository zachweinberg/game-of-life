import React from 'react';
import styled from 'styled-components';
import { Game, Heading } from './components';

const App = () => {
  return (
    <>
      <Heading>Conway's Game of Life</Heading>
      <Game />
      <StyledLink target="_blank" href="https://github.com/zachweinberg/game-of-life">
        View Code
      </StyledLink>
      <StyledLink target="_blank" href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">
        Learn about the Game of Life
      </StyledLink>
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
