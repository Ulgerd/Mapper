import React from 'react';
import Icon from './Icon.js';
import { Draggable } from "react-beautiful-dnd";
import styled from 'styled-components'

const StyledLi = styled.li`
   display: flex;
   align-items: center;
   margin-bottom: 0.5em;
`

const StyledSpan = styled.span`
  width: 90%;
  text-align: justify;
  padding-right: 1em;
`

export function ListStr(props) {
  return (
    <Draggable
      key={props.id}
      draggableId={props.id}
      index={props.index}
    >
      {(provided, snapshot) => (
        <StyledLi
          ref={provided.innerRef}
           {...provided.draggableProps}
           {...provided.dragHandleProps}
        >
          <StyledSpan>{props.index+1}. {props.name}</StyledSpan>
          <Icon
            onClick = {() => {props.onDotRemove(props.index)}}
            fill='black'
            xlink='close'
          />
        </StyledLi>
      )}
    </Draggable>
  );
}

export default ListStr;
