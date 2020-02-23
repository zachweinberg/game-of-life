import React from 'react';
import styled from 'styled-components';

const Controls = ({ startAnimation, stopAnimation, reset }) => {
  return (
    <StyledControls>
      <StyledButton onClick={startAnimation}>Start</StyledButton>
      <StyledButton onClick={stopAnimation}>Stop</StyledButton>
      <StyledButton onClick={reset}>Reset</StyledButton>
    </StyledControls>
  );
};

const StyledControls = styled.div`
  margin-bottom: 1rem;
  text-align: center;
`;

const StyledButton = styled.button`
  padding: 0.4rem;
  font-size: 1.1rem;
  border-radius: 5px;
  border: none;
  background-color: black;
  color: white;
  cursor: pointer;
  margin-right: 10px;
  &:hover {
    background-color: #333;
  }
`;

export default Controls;
