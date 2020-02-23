import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Grid from './Grid';
import Controls from './Controls';
import { generateNewCells, generateNextGenCells } from '../grid-utils';

const Game = () => {
  const [cells, setCells] = useState(generateNewCells());
  const [generation, setGeneration] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalTimer = useRef();

  const animateGrid = () => {
    setCells(prevCells => generateNextGenCells(prevCells));
    setGeneration(oldGen => oldGen + 1);
  };

  const startAnimation = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalTimer.current = setInterval(animateGrid, 150);
    }
  };

  const stopAnimation = () => {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(intervalTimer.current);
    }
  };

  const reset = () => {
    setCells(generateNewCells());
    setGeneration(0);
  };

  return (
    <GameWrapper>
      <Controls
        startAnimation={startAnimation}
        stopAnimation={stopAnimation}
        reset={reset}
        generation={generation}
        isRunning={isRunning}
      />
      <StyledGeneration>Generation: {generation}</StyledGeneration>
      <Grid cells={cells} />
    </GameWrapper>
  );
};

const GameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const StyledGeneration = styled.span`
  margin-bottom: 1rem;
`;

export default Game;
