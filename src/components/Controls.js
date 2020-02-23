import React from 'react';
import styled from 'styled-components';

const Controls = ({ startAnimation, stopAnimation, reset, isRunning }) => {
  return (
    <StyledControls>
      <StyledButton disabled={isRunning} onClick={startAnimation}>
        Start
      </StyledButton>
      <StyledButton disabled={!isRunning} onClick={stopAnimation}>
        Stop
      </StyledButton>
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
  background-color: ${props => (props.disabled ? '#bdbdbd' : '#000')};
  color: white;
  cursor: pointer;
  margin-right: 10px;
  &:hover {
    background-color: ${props => (props.disabled ? '#bdbdbd' : '#333')};
  }
`;

export default Controls;
