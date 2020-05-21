import React, { useState, useReducer } from 'react';
import * as red from '../reducer/reducer';
import ToDoCard from './ToDoCard';
import Form from './Form';

export default function ToDo() {
    const { initialState, reducer } = red.default;
    const [state, dispatch] = useReducer(reducer,initialState);
    const [input, setInput] = useState("");

    function handleChanges(e) {
        setInput(e.target.value);
    }

    function handleClear(){
        dispatch({type: 'CLEAR'});
    }
    function handleSubmit(e){
        e.preventDefault();
        dispatch({type: 'ADD_TODO', payload: input});
        setInput('');
    }
    function handleDone(e){
        dispatch({type: 'COMPLETED', payload: e.target.id});
    }

    return (
        <div>
            <Form handleChanges={handleChanges} handleClear={handleClear} handleSubmit={handleSubmit} input={input}/>
            <ToDoCard tasks ={state} handleDone={handleDone}/>
        </div>
    )
}




