import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import  {CompletedProps} from './Interfaces'
// Completed Tasks

const CompletedTodos = ({allTodos,toggleTodo,deleteTodo}:CompletedProps) => {
  return (
    <div className='container-completed'>
      <h1 className='headerCompleted'>Completed tasks</h1>
      {allTodos.filter((allTodo)=>allTodo.completed).length===0 &&
        (<p className='container-todos-p'>
          No tasks have been completed! Hurry up!
        </p>)
      }
      <div className='complete-list'>
      {allTodos.map((allTodo)=>{
        return(
          <div className='list'>
            <ul  key={allTodo.id}>
              <li >
              {allTodo.completed &&
              (
                <label>
                  <div className='complete-lable'>
                    <div className='complete-item'>
                      <input
                      type="checkbox"
                      checked={allTodo.completed}
                      onChange={e=>{toggleTodo(allTodo.id,e.target.checked)}}
                      />
                      <p style={allTodo.completed && {textDecoration:"line-through"}}>{allTodo.task}</p>
                    </div>
                    <div className='btn-group'>
                      <button className='btn btn-danger'
                        onClick={()=>{deleteTodo(allTodo.id)}}
                      >
                        <FontAwesomeIcon icon={faTrashCan} size="lg" />
                      </button><br/>
                    </div>
                  </div>
                </label>
              )
              }
              </li>
            </ul>
          </div>
          )})
        }
        </div>
    </div>
  )
}

export default CompletedTodos