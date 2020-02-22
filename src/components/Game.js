import React, { useState } from 'react';
import styled from 'styled-components';
import Grid from './Grid';
import { generateNewCells, generateNextCells } from '../grid-utils';

const Game = () => {
  const [cells, setCells] = useState(generateNewCells());
  const [running, setRunning] = useState(false);
  const [generation, setGeneration] = useState(0);

  const animateGrid = () => {
    // if (!running) {
    //   return;
    // }

    setCells(prevCells => generateNextCells(prevCells));
    setGeneration(oldGen => oldGen + 1);
    setTimeout(animateGrid, 150);
  };

  // const handleStatusChange = () => {
  //   if (running) {
  //     setRunning(false);
  //   } else {
  //     animateGrid();
  //     setRunning(true);
  //   }
  // };

  console.log('> Render game');

  return (
    <GameWrapper>
      <Grid cells={cells} />
      <button onClick={animateGrid}>{running ? 'Stop' : 'Start'}</button>
      <span>gen: {generation}</span>
    </GameWrapper>
  );
};

const GameWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Game;
