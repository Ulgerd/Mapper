import React from 'react';
import styled from 'styled-components'

const StyledFooter = styled.div`
  position:absolute;
  left:0;
  bottom:0;
  right:0;
  display: flex;
  flex-direction: column;
  background-color: lightgray;
  padding-bottom:1.5em;
`

export function Footer() {
  return (
    <StyledFooter>
      <span>Код можно посмотреть тут:
        <a href="https://github.com/Ulgerd/Mapper/tree/master/src">
          GitHub Mapper
        </a>
      </span>
      <span>Первая часть квалификационного задания:
        <a href="https://resume.ulgerd.now.sh/FunBox_Level_1.pdf">
          Level_I
        </a>
      </span>
      <span>Резюме:
        <a href="https://resume.ulgerd.now.sh/Pylaev_React_Jun.html">
          Resume
        </a>
      </span>
    </StyledFooter>
  );
}

export default Footer;
