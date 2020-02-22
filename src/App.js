import React from 'react';
import Heading from './components/Heading';
import Game from './components/Game';

const App = () => {
  console.log('Render root app');

  return (
    <>
      <Heading>Conway's Game of Life</Heading>
      <Game />
    </>
  );
};

export default App;
