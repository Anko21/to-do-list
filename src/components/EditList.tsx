import React, { useState } from 'react'
import CompletedTodos from './CompletedTodos'
import AddTodos from './AddTodos'
import useAutoFocus from "./useAutoFocus"
import  {EditListProps} from './Interfaces'

const EditList = (props:EditListProps) => {

    const [title,setTitle]=useState(props.title)
    const [value,setValue]=useState('')
    const [editTodos,setEditTodos]=useState(props.allTodos)
    const itemInput=useAutoFocus();

    const addEditTodos=()=>{
        setEditTodos([
            ...editTodos,
            {
            task:value,
            id:crypto.randomUUID(),
            edited:false,
            completed:false
            }])
    }

    const submitEditedTodos=(e:React.FormEvent)=>{
        e.preventDefault()
        addEditTodos()
        setValue('')
    }

//connects edited-list with allLists from MainPage
    const updateEditedList=()=>{
        props.updateList(props.id,title,editTodos)
        props.setEditMode(prevMode=>!prevMode)
    }


//Complete todo item/  checkbox
    const toggleTodo=(id:string)=>{
        setEditTodos((currentTodos)=>{
            return currentTodos.map(todo=>{
                if (todo.id===id){
                return {...todo, completed:!todo.completed}
                }
                return todo
            })
        })
    }

//Delete Todo item/ delete button
    const deleteTodo=(id:string)=>{
        const newTodos=editTodos.filter(todo=>todo.id!==id)
        setEditTodos(newTodos)
    }

//Edit todo item/  edit buton
    const handleEdit=(id:string)=>{
        setEditTodos(editTodos.map(todo=>todo.id===id ?{
            ...todo, edited:!todo.edited
            }: todo
    ))}

//Update edited todo item/ update task buton
    const updateTask= ( updatedTodo:string,id:string)=>{
        setEditTodos(editTodos.map(todo=>todo.id===id ? {
        ...todo,  task:updatedTodo, edited:!todo.edited
        }: todo
    ))}

return(
    <div>
        <form  className='new-item-form' onSubmit={submitEditedTodos}>
            <div className='title'>
                <input
                type="text"
                className='title1'
                placeholder='Title'
                name="Title"
                value={title}
                onChange={(e)=>{setTitle(e.target.value)}}
                ref={itemInput}
                />
            </div>

            <div className='form-row '>
                <input
                type='text'
                id='listItem'
                placeholder='List item'
                className='new-item'
                name="itemList"
                value={value}
                onChange={(e)=>setValue(e.target.value)}
                />
                <button className='btn'type="submit" >
                    Add
                </button>
            </div>
        </form>

            <AddTodos
            allTodos={editTodos}
            toggleTodo={toggleTodo}
            handleEdit={handleEdit}
            deleteTodo={deleteTodo}
            updateTask={updateTask}
            />
            <CompletedTodos
            allTodos={editTodos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            />

        <button onClick={updateEditedList} className='createList-btn'>Done</button>

    </div>
  )
}

export default EditList;