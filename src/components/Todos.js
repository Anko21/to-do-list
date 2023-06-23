import React from 'react'
import EditForm from './EditForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import CompletedTodos from './CompletedTodos';


function ListOfGoals({allTodos,updateTask, toggleTodo, handleEdit,deleteTodo}){
    return(
        <div className='containerCompleted'>
            <>
                {/* {allTodos.filter(
                    (allTodo)=>!allTodo.completed).length===0 ?
                    <p style={{fontSize:"12px",marginTop:'3em'}}>No tasks for today! Have fun !</p>:''} */}
                <ul className='list'>
                {allTodos.map((allTodo)=>{
                    return(
                        <li key={allTodo.id}>
                        {!allTodo.edited?
                        <>
                            {!allTodo.completed?
                            <>
                                <label>
                                    <input
                                    type="checkbox"
                                    name="checkbox"
                                    checked={allTodo.completed}
                                    onChange={e=>{toggleTodo(allTodo.id,e.target.checked)}}
                                    />
                                    <p>{allTodo.task}</p>
                                    <button className='btn btn-edit' onClick={()=>{handleEdit(allTodo.id)}}><FontAwesomeIcon icon={faPenToSquare}/></button><br/>
                                    <button className='btn btn-danger' onClick={()=>{deleteTodo(allTodo.id)}}><FontAwesomeIcon icon={faTrash}/></button><br/>
                                </label>
                            </>:
                            ''}
                        </>:
                        <EditForm
                        allTodo={allTodo}
                        updateTask={updateTask}
                        />
                        }
                        </li>
                    )})}
                </ul>
            </>
      </div>
    );
  }

export default ListOfGoals;