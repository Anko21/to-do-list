import React from 'react'
import{ ReadOnlyProps} from './Interfaces'

const ReadOnlyList = (props:ReadOnlyProps) => {
  return (
    <>
      <div className='existing-form'>
        <div className='existing-title'>
          <h3>{props.title}</h3>
        </div>
      </div>
      <div className='container-todos'>
        {props.allTodos.filter((allTodo)=>!allTodo.completed).length===0 &&
          (<p className='container-todos-p'>
              No tasks for today! Have fun !
          </p>)
        }
        <div className='todo-list'>
        {props.allTodos.map((allTodo)=>{
          return(
            <div className='list' key={allTodo.id}>
              <ul>
                <li key={allTodo.id}>
                  {!allTodo.completed &&
                    (<label>
                      <div className='listlabel'>
                        <div className='list-item-readonly'>
                           <p>{allTodo.task}</p>
                        </div>
                      </div>
                    </label>)
                  }
                </li>
              </ul>
           </div>
          )})}
        </div>
      </div>
      <div className='container-completed'>
        <h1 className='headerCompleted'>Completed tasks</h1>
        {props.allTodos.filter((allTodo)=>allTodo.completed).length===0 &&
          (<p className='container-todos-p'>
            No tasks have been completed! Hurry up!
          </p>)
        }
        <div className='complete-list'>
          {props.allTodos.map((allTodo)=>{
            return(
              <div className='list'>
                <ul  key={allTodo.id}>
                  <li >
                  {allTodo.completed &&
                  (
                    <label>
                      <div className='complete-lable'>
                        <div className='complete-item'>
                          <p style={allTodo.completed && {textDecoration:"line-through"}}>{allTodo.task}</p>
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
      <button
        className='createList-btn'
        onClick={()=>props.setEditMode(prevMode=>!prevMode)}>
        Edit
      </button>
    </>
  )
}

export default ReadOnlyList