import React from 'react'
import EditForm from './EditForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


//Ongoing tasks

function Todos ({allTodos,updateTask, toggleTodo, handleEdit,deleteTodo}){
    return(
    <div div className='todo-list'>
        {allTodos.map((allTodo)=>{
            return(
                <div className='list'>
                    {!allTodo.edited?
                    <>
                    <ul>
                        <li key={allTodo.id}>
                            {!allTodo.completed?
                            <>
                                <label className='listlabel'>
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
                                        <button className='btn btn-edit' onClick={()=>{handleEdit(allTodo.id)}}><FontAwesomeIcon icon={faPenToSquare}/></button><br/>
                                        <button className='btn btn-danger' onClick={()=>{deleteTodo(allTodo.id)}}><FontAwesomeIcon icon={faTrash}/></button><br/>
                                    </div>
                                </label>
                            </>:
                            ''}

                        </li>
                     </ul>
                    </>:
                    <EditForm
                    allTodo={allTodo}
                    updateTask={updateTask}
                    />
                    }
                 </div>
            )})}
    </div>
    );
  }

export default Todos;