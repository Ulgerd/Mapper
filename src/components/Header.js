import React from 'react';
import styled from 'styled-components'

const StyledHeader = styled.h1`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 1em;
  background-color: lightgray;
`

function Header() {
  return (
    <StyledHeader>
      Mapper
    </StyledHeader>
  );
}

export default Header;
