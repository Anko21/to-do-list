import React, { useState } from 'react'

//conditional rendering when edit button is clicked

const EditForm = ({ allTodo,updateTask}) => {

  const[updatedValue,setUpdatedValue]=useState(allTodo.task)

  console.log(updatedValue)
  console.log(`allTodos=`); console.log(allTodo)



  const submitHandler=(e)=>{
    e.preventDefault()
    updateTask(updatedValue,allTodo.id)
}

  return (
    <div className='container'>
        <form className='new-item-form' onSubmit={submitHandler}>
            <div  className='form-row '>
                <input
                    type='text'
                    id='listItem'
                    placeholder='Update task'
                    name="new Item"
                    className='new-item'
                    value={updatedValue}
                    onChange={(e)=>setUpdatedValue(e.target.value)}
                />
                <button className='btn'type="submit" disabled={!updatedValue}>Update</button>
            </div>
        </form>
      </div>
  )}
export default EditForm;