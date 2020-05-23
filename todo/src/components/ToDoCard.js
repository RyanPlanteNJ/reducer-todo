import React from 'react';
import styled from 'styled-components';


const StyledCard = styled.div`
  border-top: 3px #fdfda9 solid;
  border-left: 3px #fdfda9 solid;
  border-right: 3px #fcfc77 solid;
  border-bottom: 3px #fcfc77 solid;
  background-color: #fdfda9;
  margin: 10px 0px 10px;
  border-radius: 3px;
`;

const StyledTitle = styled.h3`
  font-size: 30px;
  font-family: "Barlow", sans-serif;
`;

const StyledComplete = styled.p`
  font-size: 20px;
  font-family: "Quicksand", sans-serif;
`;


const ToDoCard = (props) => {
    const { tasks } = props.tasks;
    console.log(tasks);
    return (
        <div>
            {tasks.map(todo=>{
                return (
                    <StyledCard>
                      <StyledTitle>{todo.item}</StyledTitle>
                      <StyledComplete>Complete: {JSON.stringify(todo.completed)}</StyledComplete>
                      <button id={todo.id} onClick={(e) => props.handleDone(e)}>
                        COMPLETED
                      </button>
                    </StyledCard>
                );
            })}
        </div>
    )
}

export default ToDoCard;