import React from 'react'
import EditTodos from './EditTodos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan} from '@fortawesome/free-solid-svg-icons';

//Ongoing tasks

function AddTodos ({allTodos,updateTask, toggleTodo, handleEdit,deleteTodo}){
    return(
    <div className='container-todos'>
        {allTodos.filter((allTodo)=>!allTodo.completed).length===0 &&
            (<p className='container-todos-p's>
                No tasks for today! Have fun !
            </p>)
        }
        <div div className='todo-list'>
        {allTodos.map((allTodo)=>{
            return(
                <div className='list' key={allTodo.id}>
                    {!allTodo.edited?
                    (
                    <ul>
                        <li key={allTodo.id}>
                            {!allTodo.completed &&
                            (<label>
                                <div className='listlabel'>
                                    <div className='list-item'>
                                        <input
                                        type="checkbox"
                                        name="checkbox"
                                        checked={allTodo.completed}
                                        onChange={e=>{toggleTodo(allTodo.id,e.target.checked)}}
                                        />
                                        <p>{allTodo.task}</p>
                                    </div>
                                    <div className='btn-group'>
                                        <button className='btn btn-edit'
                                            onClick={()=>{handleEdit(allTodo.id)}}
                                            >
                                            <FontAwesomeIcon icon={faPencil} size="m"/>
                                        </button><br/>
                                        <button className='btn btn-danger'
                                            onClick={()=>{deleteTodo(allTodo.id)}}
                                            >
                                            <FontAwesomeIcon icon={faTrashCan} size="m"  />
                                        </button><br/>
                                    </div>
                                </div>
                            </label>
                            )
                            }

                        </li>
                     </ul>
                    ) :
                    <EditTodos
                    allTodo={allTodo}
                    updateTask={updateTask}
                    />
                    }
                 </div>
            )})}
        </div>
    </div>
    );
  }

export default AddTodos;