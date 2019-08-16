import React from 'react';
import { Draggable } from "react-beautiful-dnd";

function ListStr(props) {
  return (
    <Draggable key={props.id} draggableId={props.id} index={props.index}>
                  {(provided, snapshot) => (
      <li
        ref={provided.innerRef}
         {...provided.draggableProps}
         {...provided.dragHandleProps}
      >
        <span>{props.name}</span>
        <button onClick = {() => {props.onDotRemove(props.dotPos)}}></button>
      </li>
    )}
</Draggable>
  );
}

export default ListStr;
