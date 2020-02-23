import React from 'react';
import { Game, Heading } from './components';

const App = () => {
  return (
    <>
      <Heading>Conway's Game of Life</Heading>
      <Game />
    </>
  );
};

export default App;
