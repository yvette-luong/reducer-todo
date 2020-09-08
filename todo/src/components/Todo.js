import React from 'react'

export default function ToDo(props) {
    const { todos, dispatch } = props

    return (
        <div>
            {todos.map((todo,id)=>
            <h3
            style={{textDecoration:todo.completed? 'line-through': 'none'}}
            key={todo.id}
            onClick={()=>dispatch({type:'TOGGLE_TODO',id})}
            >{todo.item}</h3>
            )}                        
        </div>
    )
}