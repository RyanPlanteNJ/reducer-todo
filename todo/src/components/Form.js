import React from 'react'

export default function Form(props){
    return(
        <div>
            <form onSubmit={(e) => props.handleSubmit(e)}>
                <input type="text" placeholder='What do you need to do today?' onChange={(e) => props.handleChanges(e)} value={props.input}/>
                <button disabled ={props.input.trim()==='' ? true : false}>Add</button>
            </form>
            <button onClick={(e)=>props.handleClear(e)}>Remove Completed Tasks</button>
        </div>
    )
}