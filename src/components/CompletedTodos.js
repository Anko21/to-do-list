import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

// Completed Tasks

const CompletedTodos = ({allTodos,toggleTodo,deleteTodo}) => {
  return (
    <>
      {allTodos.map((allTodo)=>{
        return(
          <ul className='complete-list'>
            <li key={allTodo.id}>
            {allTodo.completed?
              <>
                <label className='complete-item'>
                  <input
                  type="checkbox"
                  checked={allTodo.completed}
                  onChange={e=>{toggleTodo(allTodo.id,e.target.checked)}}
                  />
                  <p style={allTodo.completed?{textDecoration:"line-through"}:null}>{allTodo.task}</p>
                  <button className='btn btn-danger' onClick={()=>{deleteTodo(allTodo.id)}}><FontAwesomeIcon icon={faTrash}/></button><br/>
                </label>
              </>
            :""}
            </li>
          </ul>
          )})
        }
    </>
  )
}

export default CompletedTodos