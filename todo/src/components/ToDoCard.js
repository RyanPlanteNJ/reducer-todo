import React from 'react';
import moment from 'moment';

const ToDoCard = (props) => {
    const { tasks } = props.tasks;
    console.log(tasks);
    return (
        <div>
            {tasks.map(todo=>{
                return(
                    <div>
                       <h3>{todo.item}</h3>
                       <p>Complete: {JSON.stringify(todo.completed)}</p>
                       <button id ={todo.id} onClick={e => props.handleDone(e)}>COMPLETED</button>
                    </div>
                )
            })}
        </div>
    )
}

export default ToDoCard;