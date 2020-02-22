import React from 'react';
import Text from './components/Text';
import Game from './components/Game';

const App = () => {
  console.log('render app');
  return (
    <>
      <Text>Conway's Game of Life</Text>
      <Game />
    </>
  );
};

export default App;
