import React from 'react';

import moment from 'moment';

let initialState = {
   tasks: [
    {
        item: 'Work on database for Work',
        completed: false,
        posted: moment().calendar(),
        id: 1
    },
    {
        item: 'Work on budger for the month',
        completed: true,
        posted: moment().calendar(),
        id: 2
    }
   ]
}

function reducer(state, action) {
    switch(action.type) {
        case 'ADD_TODO':
            return {tasks: [...state.tasks, {item: action.payload, id: Date.now(), completed: false, posted: moment().calendar() }]}
        case 'COMPLETED':
            return {tasks: state.tasks.map(task => {return Number(task.id)===Number(action.payload) ? {item: task.item, id: task.id, completed: !task.completed } : task })}
        case 'CLEAR':
            return {tasks: state.tasks.filter(task => {
                return task.completed === false;
            })
        };

        default: 
            return state;
    }
}

export default { reducer, initialState };