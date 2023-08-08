import React, { useState } from 'react'
import useAutoFocus from "./useAutoFocus"
import  {EditTodosProps} from './Interfaces'

//conditional rendering when edit button(pen) is clicked

const EditTodos = ({ allTodo,updateTask}:EditTodosProps) => {

  const[updatedValue,setUpdatedValue]=useState(allTodo.task)
  const itemInput=useAutoFocus();

  const submitHandler=(e:React.FormEvent)=>{
    e.preventDefault()
    updateTask(updatedValue,allTodo.id)
  }

  return (
        <form className='edit-item-form' onSubmit={submitHandler}>
            <div  className='edit-form-row '>
                <input
                    type='text'
                    id='listItem'
                    placeholder='Update task'
                    name="new Item"
                    className='edit-item'
                    value={updatedValue}
                    onChange={(e)=>setUpdatedValue(e.target.value)}
                    ref={itemInput}
                />
                <button className='btn'type="submit" disabled={!updatedValue}>Update</button>
            </div>
        </form>
  )}
export default EditTodos;