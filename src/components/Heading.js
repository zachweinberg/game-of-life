import React from 'react';
import styled from 'styled-components';

const Heading = ({ children }) => {
  return <StyledHeading>{children}</StyledHeading>;
};

const StyledHeading = styled.h1`
  font-size: 1.4rem;
  text-align: center;
  margin: 1rem 0 1rem 0;
`;

export default Heading;
