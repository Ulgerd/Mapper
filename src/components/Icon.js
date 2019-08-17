import React from 'react';
import Icons from '../assets/icons.svg';
import styled from 'styled-components'

const StyledPieceImage = styled.svg`
  margin-top: 0.1em;
  justify-self: center;
  cursor: pointer;
  &:hover {
    fill: lightblue;
  }
  `

export default function Icon(props) {
  return (
    <StyledPieceImage
        fill= {props.fill}
        width='1.5em'
        height='1.5em'
        onClick={props.onClick}
      >
        <use xlinkHref={`${Icons}#${props.xlink}`}/>
    </StyledPieceImage>
  )
}
