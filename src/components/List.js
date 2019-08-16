import React from 'react';
import { connect } from 'react-redux';
import ListStr from './ListStr.js';
import { removeDot, rearrangeDots } from '../actions/rootActions.js'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'

const StyledUl = styled.ul`
   list-style-type: none;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   margin-left: 0;
   padding-left: 0;
`

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

function List(props) {
  const onDragEnd =(result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      props.dots,
      result.source.index,
      result.destination.index
    );

    props.rearrangeDots(items);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
        {(provided, snapshot) => (
         <StyledUl
           {...provided.droppableProps}
           ref={provided.innerRef}
         >
            {props.dots.map((obj, index) => {
              return <ListStr
                        key={obj.id}
                        id={obj.id}
                        index={index}
                        name={obj.name}
                        onDotRemove={props.removeDot}
                      />
            })}
          </StyledUl>
        )}
        </Droppable>
      </DragDropContext>

  );
}

const mapStateToProps = store => {
  return {
    dots: store.dots,
  }
}

const mapDispatchToProps = dispatch => ({
  removeDot: (dotPos) => {dispatch(removeDot(dotPos))},
  rearrangeDots: (dotsArr) => {dispatch(rearrangeDots(dotsArr))}
})

export default connect(mapStateToProps, mapDispatchToProps)(List);
