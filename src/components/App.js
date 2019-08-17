import React from 'react';
import Input from './Input.js';
import List from './List.js';
import Mapper from './Mapper.js';
import Header from './Header.js';
import styled from 'styled-components'

const StyledApp = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 1em;
`

const StyledNav = styled.div`
  width: 20em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export function App() {
  return (
    <div>
      <Header/>
      <StyledApp>
        <StyledNav>
          <Input />
          <List />
        </StyledNav>
        <Mapper />
      </StyledApp>
    </div>
  );
}

export default App;
