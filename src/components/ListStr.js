import React from 'react';
import { Draggable } from "react-beautiful-dnd";
import styled from 'styled-components'

const StyledLi = styled.li`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 0.5em;
`

const StyledButton = styled.button`
  width: 2em;
  height: 2em;
  border-radius:1em;
  justify-self: center;
`

function ListStr(props) {
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
          <span>{props.index+1}. {props.name}</span>
          <StyledButton onClick = {() => {props.onDotRemove(props.index)}}>X
          </StyledButton>
        </StyledLi>
      )}
    </Draggable>
  );
}

export default ListStr;
